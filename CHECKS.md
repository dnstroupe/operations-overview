# Checks and remaining work

Checked on November 11, 2026.

## What passed

* Calculation checks: totals, overdue rules, empty completion percentage, date range, team totals, and unique IDs. Run `node test-data.cjs`.
* Browser check: choosing People changed the summary to 3 open, 1 overdue, 1 due soon, and 100% of 1 completed request.
* Opening an overdue request showed the owner, current situation, and next step.
* Escape closed the dialog and returned focus to the request button.
* A search with no matches showed the empty state and disabled export. Clearing filters restored the list.
* Desktop and 390 pixel phone layouts were visually reviewed. The phone view had no horizontal page overflow.
* Figma desktop and mobile layouts were visually reviewed. The file uses native text, frames, and component instances, not a flattened screenshot.

## Accessibility choices

The application has visible focus styles, named form controls, semantic headings, a skip link, textual chart values, and a data table for the completion chart. Status is written out, so color is not the only cue. The request dialog has an accessible name and uses the browser's native modal behavior. Reduced motion preferences turn off smooth scrolling.

## Still to check

A full keyboard walkthrough, screen reader testing, zoom and reflow across more sizes, a complete contrast audit, and testing in other browsers. The CSV export and sorting also need a broader interaction test. This is not a formal Section 508 conformance review. I do not claim that the project is certified or fully compliant.
