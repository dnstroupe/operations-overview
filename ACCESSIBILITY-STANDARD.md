# Accessibility baseline for government focused projects

This is David's standing project preference: accessibility belongs in the first version, not a final polish pass. Use this baseline for future DoD and government focused dashboards, applications, and portfolio projects.

## Design and build

* Give interactive controls a visible hover response and an equally clear keyboard focus state. Do not rely on a color change alone to communicate meaning or selection.
* Use tooltips when they explain something useful. Make them available on keyboard focus, dismissible with Escape, and hoverable. Keep essential instructions visible or available through a named expandable help control so touch users can reach them.
* Use real buttons, links, headings, labels, and tables. Give controls meaningful names and connect supporting instructions programmatically.
* Make every action work with a keyboard. Keep focus in dialogs, support Escape, and return focus to the control that opened them. Avoid focus hidden behind overlays or sticky content.
* Check text contrast, control boundaries, focus indicators, and selected states. Prefer comfortably sized targets and generous spacing.
* Provide text and data alternatives for charts. Keep status understandable without color. Explain metric definitions, denominators, date ranges, and empty states.
* Support narrow screens, zoom, text spacing, reduced motion, and system contrast preferences. Avoid fixed heights that cut off text.
* Announce important changes without excessive interruptions. Preserve user focus during filtering and updates.

## Check before sharing

Use automated checks alongside a systematic manual review aligned with the applicable Section 508 requirements. Test keyboard tasks, assistive technology, reflow, zoom, text spacing, contrast, and error or empty states. Record the environment, scope, results, defects, fixes, and remaining work. Retest affected flows after changes.

For web work, target WCAG 2.2 AA while assessing the applicable revised Section 508 requirements, which incorporate WCAG 2.0 A and AA. Newer WCAG targets do not substitute for documenting the applicable requirements.

## How to describe the result

Until a full assessment is complete: “Designed with accessibility in mind. Formal Section 508 testing is pending.” Only claim conformance when evidence supports it. A tooltip, hover effect, or automated score alone cannot establish compliance.

References: [Section 508 testing](https://www.section508.gov/test/), [systematic testing guidance](https://www.section508.gov/manage/playbooks/technology-accessibility-playbook/10/), and [WCAG quick reference](https://www.w3.org/WAI/WCAG22/quickref/).
