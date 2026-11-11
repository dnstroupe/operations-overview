/* Fictional requests. No customer or government data. */
const SNAPSHOT = '2026-11-11';
const TASKS = [
{id:'OP-101',title:'Refresh the team onboarding guide',team:'People',owner:'Alex Morgan',status:'Waiting on info',priority:'High',created:'2026-09-28',due:'2026-11-05',completed:null,note:'Waiting for the updated checklist from the team lead.',next:'Confirm the missing checklist and agree on a new date.'},
{id:'OP-102',title:'Review the monthly service summary',team:'Service',owner:'Jordan Lee',status:'In review',priority:'High',created:'2026-10-06',due:'2026-11-08',completed:null,note:'The first draft is ready. The final review is still open.',next:'Ask the reviewer to confirm the two outstanding items.'},
{id:'OP-103',title:'Update the equipment request form',team:'Facilities',owner:'Taylor Reed',status:'In progress',priority:'Medium',created:'2026-10-12',due:'2026-11-10',completed:null,note:'The form changes are drafted and need a quick check.',next:'Walk through the revised form with the request owner.'},
{id:'OP-104',title:'Prepare the new starter checklist',team:'People',owner:'Casey Brooks',status:'In progress',priority:'Medium',created:'2026-10-20',due:'2026-11-13',completed:null,note:'The checklist is being reviewed for missing steps.',next:'Finish the review before sharing it with the team.'},
{id:'OP-105',title:'Confirm support coverage for next week',team:'Service',owner:'Riley Chen',status:'In review',priority:'High',created:'2026-10-26',due:'2026-11-17',completed:null,note:'The draft coverage plan is ready.',next:'Confirm coverage with each team lead.'},
{id:'OP-106',title:'Organize the shared meeting spaces',team:'Facilities',owner:'Taylor Reed',status:'In progress',priority:'Low',created:'2026-10-28',due:'2026-12-04',completed:null,note:'The room list has been checked against current needs.',next:'Review the proposed room labels.'},
{id:'OP-107',title:'Review the quarterly training calendar',team:'People',owner:'Alex Morgan',status:'Waiting on info',priority:'Medium',created:'2026-11-02',due:'2026-12-18',completed:null,note:'Two training dates still need confirmation.',next:'Follow up with the session owners.'},
{id:'OP-108',title:'Plan the next service review',team:'Service',owner:'Jordan Lee',status:'In progress',priority:'Low',created:'2026-11-05',due:'2027-01-15',completed:null,note:'The agenda is taking shape.',next:'Collect discussion topics from the team.'},
{id:'OP-109',title:'Publish the contact directory',team:'People',owner:'Casey Brooks',status:'Complete',priority:'Medium',created:'2026-09-28',due:'2026-10-10',completed:'2026-10-09',note:'The directory is ready for the fictional team.',next:'No action needed.'},
{id:'OP-110',title:'Close the workspace review',team:'Facilities',owner:'Taylor Reed',status:'Complete',priority:'Low',created:'2026-10-02',due:'2026-10-20',completed:'2026-10-23',note:'The final review finished after its planned date.',next:'No action needed.'},
{id:'OP-111',title:'Update the service handoff notes',team:'Service',owner:'Riley Chen',status:'Complete',priority:'High',created:'2026-10-12',due:'2026-10-31',completed:'2026-10-29',note:'The handoff notes were checked and shared.',next:'No action needed.'},
{id:'OP-112',title:'Review the visitor checklist',team:'Facilities',owner:'Taylor Reed',status:'Complete',priority:'Medium',created:'2026-10-20',due:'2026-11-09',completed:'2026-11-06',note:'The checklist review is complete.',next:'No action needed.'}
];
const day=(value)=>Date.parse(value+'T00:00:00Z');
const overdue=t=>!t.completed&&day(t.due)<day(SNAPSHOT);
const daysUntil=t=>Math.round((day(t.due)-day(SNAPSHOT))/86400000);
function summarize(rows){const open=rows.filter(t=>!t.completed),closed=rows.filter(t=>t.completed);return {open:open.length,overdue:open.filter(overdue).length,due:open.filter(t=>daysUntil(t)>=0&&daysUntil(t)<=7).length,onTime:closed.length?Math.round(100*closed.filter(t=>day(t.completed)<=day(t.due)).length/closed.length):null,closed:closed.length};}
if(typeof module!=='undefined')module.exports={TASKS,SNAPSHOT,overdue,daysUntil,summarize,day};
