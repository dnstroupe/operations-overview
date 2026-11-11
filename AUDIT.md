# Portfolio readiness review

Reviewed November 11, 2026. This is an assessment through a technical recruiter and hiring manager lens, not feedback from an actual hiring panel.

## The readout

The strongest positioning is an experienced data visualization and operations professional who is developing a UX practice. The background supplies domain judgment. This independent project makes some of that thinking visible without exposing work systems. It does not yet establish senior UX design experience, independent software engineering proficiency, or measured business impact.

A recruiter should quickly find the role, government experience, tools, location, and contact route. A hiring manager should be able to trace a problem to a decision, inspect the work, and understand the limits of the evidence. The revised package is arranged around those questions.

## Gaps corrected

| Priority | Gap | Change | Why it matters |
| --- | --- | --- | --- |
| High | The case study was too thin to explain the work | Added contribution, intended user, scope, five decisions with tradeoffs, a documented review iteration, and validation limits | Makes the thinking and ownership inspectable |
| High | Earliest due dates put old completed work first | Default order is overdue, other open work, then completed work; date and priority choices remain | Supports the main attention task |
| High | Overdue replaced the actual work status | List and details show both; CSV has separate work status and schedule fields | A deadline and a workflow state answer different questions |
| High | Date context disappeared on small screens | Kept the fixed demo snapshot visible and explained upcoming date ranges | Prevents stale demo dates and hidden overdue work being misunderstood |
| High | Light control outlines and dark sidebar focus were weak | Increased outline contrast and used a contrasting focus color on the sidebar | Makes boundaries and focus easier to locate |
| High | Modal keyboard behavior needed an explicit boundary | Tab and Shift+Tab cycle within the dialog; Escape returns focus to the request | Keeps keyboard users oriented |
| Medium | Empty filters could sound like a positive operational result | Added explicit no match language; export is disabled when empty | Absence of matching data is not proof of good performance |
| Medium | Chart meaning could be overread | Clarified denominator, request count versus effort, and partial current week | Avoids unsupported conclusions |
| Medium | Figma did not show secondary states or enough handoff context | Added request detail and empty states, review notes, and text properties on metric components | Shows more than a polished overview; original screens remain layout studies |
| Medium | Portfolio Work navigation skipped the working project | Moved the anchor to the featured project; removed a redundant illustration; separated professional summaries | Gets a reviewer to the strongest inspectable artifact sooner |
| Medium | Role and contribution took too long to find | Added role and core tools near the top; made each professional contribution specific | Improves relevance and scanability |
| Medium | Validation and next steps were vague | Added an accessibility statement, expanded data tests, and a usable research script | Makes remaining work concrete without inventing evidence |

## What still needs a person

1. **Ownership walkthrough.** David should review the wording and be able to explain the implementation and decisions in his own words. AI contribution is disclosed. A repository alone does not demonstrate independent coding ability.
2. **Real usability sessions.** Use TEST-PLAN.md. No participant research or measured outcome has happened for this concept. Treat the audience and task priority as assumptions until tested.
3. **Assistive technology and broader checks.** Screen reader testing, text spacing, actual zoom, operating system contrast modes, and additional browsers remain. Selected keyboard, reflow, and contrast checks are not a conformance assessment.
4. **Manual export receipt.** CSV content and escaping are tested. The browser showed the export status, but automated confirmation of the downloaded file was unavailable. Open the actual file once before demonstrating export publicly.
5. **Public sharing and resume.** Confirm the Figma file opens for a signed out visitor. Review the current resume before adding a download. No new credential, clearance detail, availability claim, or salary information was added.

The package can be presented as an independent concept with these limits. Before a broad launch, the highest value addition is a small round of real observations and a change that follows from them. More decorative screens would add less evidence.

## Standards and scope

The design target is WCAG 2.2 Level AA. The revised Section 508 standards incorporate WCAG 2.0 Level AA for relevant electronic content; they are not interchangeable labels. No formal Section 508 or WCAG conformance claim is made. The applicable federal requirements depend on the actual product and procurement context.

Checks address selected parts of semantic structure, keyboard operation, focus order and visibility, text and nontext contrast, reflow, labels, status feedback, and alternatives to visual charts. A full assessment would also inspect every applicable success criterion, state, and workflow. Minimum target size in WCAG 2.2 has exceptions and is not a blanket 44 pixel rule.

The demo is a static, local data concept. It has no authentication, authorization, live data, audit trail, backend validation, or production monitoring. Those are future production requirements, not features to imply in the case study. A 12 row demo does not establish performance at enterprise scale.

## What was reviewed

Adham Dannaway's resource library was scanned across its categories, then the review focused on interface design, accessibility, buttons, tables, Figma structure, research, and portfolio presentation. It was not a full reading of every linked resource. Branding, stock assets, and animation were lower priorities for this project.

The following sources informed the review. They are references, not endorsements or certifications of this project.

* [Resource library](https://www.adhamdannaway.com/design-resources-library): broad scan and source selection.
* [Adham Dannaway's UI design tips](https://www.adhamdannaway.com/blog/ui-design/ui-design-tips): hierarchy, consistency, spacing, typography, and color.
* [Button design tips](https://www.adhamdannaway.com/blog/ui-design/button-design-tips): action hierarchy and recognizable controls.
* [NN/g on UX portfolios](https://www.nngroup.com/articles/ux-design-portfolios/): show the problem, role, process, and evidence rather than finished screens alone.
* [NN/g research cheat sheet](https://www.nngroup.com/articles/ux-research-cheat-sheet/): choose methods that answer the question at hand.
* [NN/g heuristic evaluation](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/): guideline inspection does not replace testing with people.
* [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/): accessibility benchmark.
* [Nontext contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) and [target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html): specific component checks.
* [WAI modal dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/): focus, Tab, Escape, and focus return.
* [Section 508 laws and policies](https://www.section508.gov/manage/laws-and-policies/): distinguish the federal standard from newer WCAG targets.
* [The A11Y Project checklist](https://www.a11yproject.com/checklist/): practical checks, not a guarantee of conformance.
* [Figma checklists](https://figmachecklists.com/): component properties, layout behavior, and useful handoff structure. This is practitioner guidance, not a certification standard.

The Interview Kit landing page and Design System Checklist were also inspected for context. Their full materials were not reviewed. This audit does not claim to have applied a paid kit or completed every design system checklist item.
