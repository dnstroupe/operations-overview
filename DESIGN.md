# How I approached it

## Start with a question

What needs my attention, and what should I know before I follow up? I used that question to keep the dashboard focused. The manager and weekly review scenario are design assumptions, not findings from interviews.

## Choose the information

I started with requests, owners, teams, due dates, and a next step. The overview moves from a summary to overdue work, then workload and recent completions, then the full list. A request opens in a dialog so someone can check the details without losing their place.

## Make the numbers understandable

Overdue is calculated from the date and completion state. The completion percentage shows how many completed requests it is based on. With no completed work, it shows a dash. Workload counts requests and does not pretend to measure effort.

## Work through the layout

The Figma file contains editable desktop and mobile layouts and reusable metric cards. I chose a quiet green palette and used warmer color for overdue work. The browser version carries that direction into working filters and request details. The Figma screens are design layouts, not a fully wired prototype. Some controls and spacing differ in the browser as the layout responds to its width.

On a phone, the table becomes a list of labeled request cards. I kept the owner, status, due date, and priority instead of hiding them to make the screen look cleaner.

## Build the interaction

Team, date, and search filters affect the whole dashboard. Status buttons affect the request list only. The screen explains both. Empty results offer a way to clear the filters. CSV export follows the list that is currently visible.

## What I would test

Ask someone to find an overdue request and explain what should happen next. Then ask them to find work due within 30 days for one team. Watch for confusion about the filters and whether they notice the next step. Repeat on a phone.

These sessions have not happened yet. I would keep the observations, make changes, and show the differences here rather than claim the first version solved everything.

## What changed in the technical review

The initial version sorted by due date and showed old completed items before unresolved work. The current version defaults to Needs attention. Another change keeps the original work status visible alongside Overdue. An overdue item can still be waiting on information; those are different facts.

The review also kept the snapshot visible on phones, strengthened control outlines and keyboard focus, documented the partial completion week, and added a proper empty result message. These changes came from guideline inspection and implementation checks, not participant research. `before-review.png` preserves the earlier screen.

Figma now includes a request detail state, an empty state, and a review handoff frame. Metric cards expose text properties. The original overview frames remain layout studies, while the browser is the reference for current interaction behavior. The file is not a complete design system or a fully wired prototype.

See [the review](AUDIT.md), [the checks](CHECKS.md), and [the session plan](TEST-PLAN.md).
