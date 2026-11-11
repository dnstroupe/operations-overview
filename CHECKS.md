# Checks and remaining work

Checked November 11, 2026. These are selected implementation checks, not a complete accessibility or production readiness assessment.

## Passed

* `node test-data.cjs`: totals, overdue rules, empty denominator, date range, team totals, unique IDs, combined filters, case insensitive search, attention and other sorting, date boundaries, CSV field parity, quoting, and formula prefix handling.
* `node --check app.js`: JavaScript syntax.
* Browser: People plus Next 30 days shows one open request, no overdue items, one due within seven days, and no completed denominator.
* Browser: default order starts with unresolved overdue OP-101. Due date sorting starts with completed OP-109. Reset restores the default controls and list.
* Browser: no match search shows an explicit empty state and disables export. Clear filters restores results.
* Keyboard: skip link focuses main; Enter opens a request; Tab and Shift+Tab stay in the modal; Escape closes it and returns focus to the originating request.
* Browser: work status and schedule appear separately in request details. The overdue list contains three rows and the export control reports those three rows.
* Responsive layout: dashboard at 320 and 390 CSS pixels, plus case study and portfolio at 320, had no horizontal page overflow in the in app browser. Desktop layout was visually inspected in Chrome. These are viewport checks, not actual device or browser zoom tests.
* Selected color pairs were measured. The control outline #6a7d73 has 4.38:1 contrast against white and 3.99:1 against #f3f5f1. Muted #5b6d69 text on #f3f5f1 is 4.99:1. This is not a complete contrast audit of every state.
* Figma request detail and review handoff frames were visually inspected after the update. Metric components have editable text properties. Original overview frames remain layout studies, not the current interaction reference.

## Still open

* Screen reader testing, including the responsive table and live result announcements.
* Full keyboard traversal of every control, actual zoom, user text spacing, operating system high contrast modes, and additional browsers.
* Full WCAG 2.2 AA assessment. No formal Section 508 conformance claim is made.
* Real participant sessions. See TEST-PLAN.md.
* Download receipt: generated CSV content is covered by tests, but the automated browser download event did not confirm receipt. Open the actual file manually before a public demonstration.
* Figma access from a signed out visitor.
* Performance under real network conditions and larger datasets. No Lighthouse or enterprise scale score is claimed.

The dashboard has no production backend. It cannot edit requests, notify people, enforce permissions, or display live operational data. All demo records are fictional.

## Accessibility implementation update

Added keyboard accessible export help with Escape dismissal, an expandable dashboard guide, programmatically associated filter and sort instructions, explicit table roles for the responsive layout, stronger focus styling, hover feedback, and a scrollable dialog. Search announcements wait briefly while typing to reduce repeated updates. Export feedback now says a download was requested rather than claiming the file was received.

Verified export help appears on keyboard focus and dismisses with Escape. The guide opens with Enter. Modal Tab containment and Escape focus return passed again. Data tests and JavaScript syntax checks passed. Hover behavior, screen reader output, system contrast, and full conformance still need systematic manual testing.

The standing baseline is in ACCESSIBILITY-STANDARD.md.

## KPI navigation checks

Open, overdue, due within seven days, and completed cards showed 8, 3, 2, and 4 rows respectively. Summary values stayed unchanged. Enter and Space activated the cards, moving focus to the request heading. People plus Due in 7 days showed one request. Clearing the list filter and resetting all filters restored their intended scopes. Added automated checks for seven day boundaries and completed records.
