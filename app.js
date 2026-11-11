const $ = id => document.getElementById(id);
let statusFilter = 'all';
let lastTrigger = null;
let currentRows = [];
const fmt = date => new Date(date + 'T00:00:00Z').toLocaleDateString('en-US', {
  month: 'short', day: 'numeric', ...(date.slice(0,4) !== SNAPSHOT.slice(0,4) ? {year:'numeric'} : {}), timeZone: 'UTC'
});
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function render() {
  const base = filterRequests(TASKS, {team:$('team').value, window:$('window').value, query:$('search').value});
  const summary = summarize(base);
  const dateScope = $('window').value === 'all' ? 'All due dates' : 'Due in the next ' + $('window').value + ' days, including today';
  $('scope').textContent = `${base.length} requests · ${$('team').value === 'all' ? 'All teams' : $('team').value} · ${dateScope}. Summary and charts follow these filters.`;
  const cards = [
    ['Open requests', summary.open, 'Not yet complete', '', 'open'],
    ['Overdue', summary.overdue, 'Open and past the due date', 'alert', 'overdue'],
    ['Due in 7 days', summary.due, 'Open · today through Nov 18', '', 'due'],
    ['Completed on time', summary.onTime === null ? '—' : summary.onTime + '%', summary.closed ? `Of ${summary.closed} completed requests` : 'No completed requests', '', 'complete']
  ];
  $('metrics').innerHTML = cards.map(([label,value,hint,cls,filter]) => `<button type="button" class="metric ${cls}" data-kpi="${filter}" aria-pressed="${statusFilter === filter}" aria-controls="rows" aria-label="${label}: ${value}. ${hint}. Show ${filter === 'complete' ? 'all completed requests' : filter === 'due' ? 'requests due within seven days' : filter === 'open' ? 'open requests' : 'overdue requests'}"><span class="metric-label">${label}</span><strong>${value}</strong><small>${hint}</small><span class="metric-action">${statusFilter === filter ? 'Selected' : filter === 'complete' ? 'Review completed requests' : 'View requests'} →</span></button>`).join('');
  $('insight-text').textContent = !base.length ? 'No requests match these filters. Clear your search or choose a wider view.' : summary.overdue
    ? `${summary.overdue} overdue ${summary.overdue === 1 ? 'request needs' : 'requests need'} a closer look. Start with the owner and the next step.`
    : 'No overdue requests in this view. Check All dates if you have selected an upcoming date range.';
  const late = sortRequests(base.filter(overdue));
  const highSoon = base.filter(t => !t.completed && t.priority === 'High' && daysUntil(t) >= 0 && daysUntil(t) <= 7);
  $('briefing-detail').textContent = late.length ? `Oldest overdue: ${late[0].title} · ${late[0].owner} · ${-daysUntil(late[0])} ${daysUntil(late[0]) === -1 ? 'day' : 'days'} late. ${highSoon.length} high priority ${highSoon.length === 1 ? 'request is' : 'requests are'} due within 7 days in this view.` : base.length ? `${highSoon.length} high priority ${highSoon.length === 1 ? 'request is' : 'requests are'} due within 7 days in this view.` : '';
  $('show-overdue').disabled = !summary.overdue;
  renderCharts(base);
  currentRows = sortRequests(filterRequests(base, {status:statusFilter}), $('sort').value);
  const filterNames = {all:'All requests',open:'Open requests',overdue:'Overdue requests',due:'Due in 7 days',complete:'Completed requests'};
  $('requests-heading').textContent = filterNames[statusFilter];
  $('active-filter').textContent = statusFilter === 'all' ? 'No additional list filter. Team, date, and search still apply.' : `Showing: ${filterNames[statusFilter]}. Summary totals and charts still describe the broader view.`;
  $('clear-list').hidden = statusFilter === 'all';
  $('result-count').textContent = `${currentRows.length} ${currentRows.length === 1 ? 'request' : 'requests'} shown · Status buttons filter this list only`;
  $('rows').innerHTML = currentRows.map(task => `
    <tr role="row">
      <td role="cell"><span class="id">${escapeHtml(task.id)}</span><button class="title-button" aria-haspopup="dialog" aria-describedby="request-help" data-id="${escapeHtml(task.id)}">${escapeHtml(task.title)}</button></td>
      <td role="cell" data-label="Team / owner">${escapeHtml(task.team)}<br><span class="muted">${escapeHtml(task.owner)}</span></td>
      <td role="cell" data-label="Status"><span class="badge ${overdue(task) ? 'overdue' : task.completed ? 'complete' : ''}">${escapeHtml(overdue(task) ? 'Overdue' : task.status)}</span>${overdue(task) ? `<span class="work-status">${escapeHtml(task.status)}</span>` : ''}</td>
      <td role="cell" data-label="Due" class="${overdue(task) ? 'late' : ''}">${fmt(task.due)}${overdue(task) ? `<span class="work-status late">${-daysUntil(task)} ${daysUntil(task) === -1 ? 'day' : 'days'} late</span>` : task.completed ? `<span class="work-status">${scheduleState(task)}</span>` : ''}</td>
      <td role="cell" data-label="Priority"><span class="priority">${escapeHtml(task.priority)}</span></td>
      <td role="cell" data-label="Next step" class="next-step">${escapeHtml(task.next)}</td>
    </tr>`).join('');
  $('empty').hidden = currentRows.length > 0;
  $('export').disabled = !currentRows.length;
  document.querySelectorAll('[data-status]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.status === statusFilter)));
}

function renderCharts(rows) {
  const teams = ['People','Service','Facilities'];
  const counts = teams.map(team => rows.filter(task => task.team === team && !task.completed).length);
  const max = Math.max(...counts, 1);
  $('workload').innerHTML = teams.map((team,i) => `<div class="workload-row"><span>${team}</span><div class="track" aria-hidden="true"><span style="width:${counts[i]/max*100}%"></span></div><strong>${counts[i]}</strong></div>`).join('');
  const weeks = ['2026-10-05','2026-10-12','2026-10-19','2026-10-26','2026-11-02','2026-11-09'];
  const totals = weeks.map(week => rows.filter(task => task.completed && day(task.completed) >= day(week) && day(task.completed) < day(week)+7*86400000 && day(task.completed) <= day(SNAPSHOT)).length);
  const peak = Math.max(...totals, 1);
  $('trend').innerHTML = weeks.map((week,i) => `<div class="week"><b>${totals[i]}</b><span class="bar" aria-hidden="true" style="height:${totals[i]/peak*95}px"></span><span>${fmt(week)}</span></div>`).join('');
  $('trend-table').querySelector('tbody').innerHTML = weeks.map((week,i) => `<tr><th scope="row">${fmt(week)}${i === weeks.length-1 ? ' (partial)' : ''}</th><td>${totals[i]}</td></tr>`).join('');
}

function openRequest(button) {
  const task = TASKS.find(item => item.id === button.dataset.id);
  if (!task) return;
  lastTrigger = button;
  $('detail-body').innerHTML = `
    <span class="id">${escapeHtml(task.id)} · FICTIONAL REQUEST</span>
    <h2 id="detail-title">${escapeHtml(task.title)}</h2>
    <dl><dt>Owner</dt><dd>${escapeHtml(task.owner)}</dd><dt>Team</dt><dd>${escapeHtml(task.team)}</dd>
    <dt>Work status</dt><dd>${escapeHtml(task.status)}</dd><dt>Due date</dt><dd>${fmt(task.due)}</dd>
    <dt>Schedule</dt><dd>${scheduleState(task)}</dd><dt>Priority</dt><dd>${escapeHtml(task.priority)}</dd>
    ${task.completed ? `<dt>Completed</dt><dd>${fmt(task.completed)}</dd>` : ''}</dl>
    <h3>Where things stand</h3><p>${escapeHtml(task.note)}</p>
    <h3>Next step</h3><p>${escapeHtml(task.next)}</p>
    <p class="muted small">This is a read only demo. It does not update a real request or notify anyone.</p>`;
  $('detail').showModal();
  $('close-detail').focus();
}

$('filters').addEventListener('submit', event => event.preventDefault());
let searchTimer;
$('filters').addEventListener('input', event => { if (event.target.id === 'search') { clearTimeout(searchTimer); searchTimer = setTimeout(render, 250); } });
$('filters').addEventListener('change', () => { clearTimeout(searchTimer); render(); });
$('filters').addEventListener('reset', () => {
  clearTimeout(searchTimer);
  statusFilter = 'all';
  $('sort').value = 'attention';
  // Native controls receive their default values after the reset event.
  setTimeout(render, 0);
});
$('sort').addEventListener('change', render);
function selectList(filter, moveToList = false) {
  clearTimeout(searchTimer);
  statusFilter = filter;
  render();
  if (moveToList) {
    $('requests-heading').focus({preventScroll:true});
    $('requests').scrollIntoView({behavior:'instant',block:'start'});
  }
}
$('metrics').addEventListener('click', event => {
  const card = event.target.closest('[data-kpi]');
  if (card) selectList(card.dataset.kpi, true);
});
$('clear-list').addEventListener('click', () => selectList('all', true));
document.querySelectorAll('[data-status]').forEach(button => button.addEventListener('click', () => {
  selectList(button.dataset.status);
}));
$('empty-reset').addEventListener('click', () => { $('filters').reset(); $('search').focus(); });
$('show-overdue').addEventListener('click', () => {
  statusFilter = 'overdue';
  render();
  $('requests').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  document.querySelector('[data-status="overdue"]').focus({preventScroll:true});
});
$('rows').addEventListener('click', event => {
  const button = event.target.closest('[data-id]');
  if (button) openRequest(button);
});
$('close-detail').addEventListener('click', () => $('detail').close());
$('detail').addEventListener('close', () => { if (lastTrigger?.isConnected) lastTrigger.focus(); else document.querySelector('[data-status="all"]').focus(); });
$('detail').addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const controls = [...$('detail').querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]')];
  const first = controls[0], last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
$('export').addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob([requestsCsv(currentRows)], {type:'text/csv;charset=utf-8'}));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'fictional-operations-requests.csv';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  $('notice').textContent = `Download requested for ${currentRows.length} fictional requests, including work status and schedule.`;
});
render();

// Supplemental help opens on hover or focus and can be dismissed with Escape.
const helpWrap = document.querySelector('.help-wrap');
const exportHelp = $('export-help');
let helpDismissed = false;
function showHelp() { if (!helpDismissed && !$('export').disabled) exportHelp.hidden = false; }
function hideHelp() { exportHelp.hidden = true; }
helpWrap.addEventListener('pointerenter', showHelp);
helpWrap.addEventListener('pointerleave', () => { if (!helpWrap.contains(document.activeElement)) { hideHelp(); helpDismissed = false; } });
helpWrap.addEventListener('focusin', showHelp);
helpWrap.addEventListener('focusout', event => { if (!helpWrap.contains(event.relatedTarget)) { hideHelp(); helpDismissed = false; } });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !exportHelp.hidden) { hideHelp(); helpDismissed = true; } });
