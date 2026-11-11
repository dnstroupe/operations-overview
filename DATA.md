# About the demo data

Everything in `data.js` is fictional. The snapshot stays on November 11, 2026, so the demo behaves consistently whenever someone opens it.

Each request has an ID, title, team, owner, status, priority, due date, optional completion date, context, and next step. There are 12 requests across People, Service, and Facilities.

Open means not complete. Overdue means open with a due date before the snapshot. Due in seven days includes the snapshot date through November 18. Completed on time means the completion date is on or before its due date, divided by completed requests in the current filtered view.

The default view has 8 open requests, 3 overdue, 2 due in seven days, and 3 of 4 completed on time. Those numbers describe only the fictional data.

The 30, 60, and 90 day filters include upcoming due dates from the snapshot. They exclude past due work. Weekly completion bars count completion dates in six Monday based weeks, including the current partial week. A request count does not measure complexity or available staff capacity.

Filters run in the browser. Exports contain only the synthetic rows in the current list. There is no database or live refresh.

## Ordering and export

The default Needs attention order puts overdue work first, then other open requests, then completed requests. Due date breaks ties. Due date and priority sorting are also available. Reset filters restores the default order and all statuses.

Work status describes the workflow. Schedule describes whether an item is overdue, upcoming, completed on time, or completed late. The CSV includes both, along with the snapshot date, and follows the visible list and order. Values are quoted, embedded quotes are escaped, and spreadsheet formula prefixes are neutralized. These checks do not turn the export into a production data integration.
