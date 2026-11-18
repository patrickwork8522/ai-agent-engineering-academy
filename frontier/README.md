# Agent Atlas — Frontier Case Room

## Purpose

Build transferable expertise by investigating important, current problems before receiving direct instruction. This project is **not** a collection of short teaser pages or lightly modified external courses. Its framework is reusable across AI, AI agents, data engineering, cybersecurity, business, science and other fields.

The case-room landing page and first case live at [Case 001](../academy/frontier/index.html). Cases 002–005 are rendered through the shared [case runner](../academy/frontier/case.html) and [case data](../academy/frontier/case-data.js). The public GitHub Pages home is [Agent Atlas](https://patrickwork8522.github.io/ai-agent-engineering-academy/academy/).

## Teaching contract for each case

1. **Frontier question** — name a real problem and why it matters, with authoritative dated references; distinguish synthetic scenarios.
2. **First hypothesis** — learners attempt the hard question before instruction. Wrong first guesses are not graded.
3. **Evidence lab** — several decisions and interactive consequences, including counterevidence. Label simulation vs live execution.
4. **Just-in-time teaching** — substantive beginner-accessible explanation, visual model, worked numerical/technical example, knowledge checks. Reference a canonical shared concept ID instead of duplicating prerequisites.
5. **Applied practice** — at least three exercises spanning diagnosis, design and communication, with progressive hints and worked solution rubrics.
6. **Assessment** — 8–10 substantive questions (>=8 correct out of 10 for ten-question case), plus written work or practical artifact. Do not award trophies for clicking alone.
7. **Professional decision** — evidence, assumptions, uncertainty, alternatives, trade-offs, permissions, business implications, communication to a stakeholder.
8. **Sources and maintenance** — primary documentation/research, date verified, license notes, next review date and subject-area owner.
9. **Honest timing** — estimate active time spent inspecting, reading, solving and reviewing, ideally validated by learners. No inflated duration for minimal material.
10. **Accessibility and privacy** — keyboard usable, understandable without expensive service subscriptions, progress storage disclosed.

## Sustainable architecture

- `frontier/cases.json`: extensible case catalog and editorial metadata. This file can be consumed by a future automated catalog UI.
- `academy/frontier/index.html`: first no-build static interactive case for GitHub Pages, including lesson and simulation logic.
- `academy/frontier/case.html`, `case-engine.js`, `case-data.js`: shared no-build case runner and authored content for Cases 002–005; each has evidence, five structured explanations, three exercises, ten questions and a curated source navigator.
- `academy/lessons/`: existing detailed canonical concepts; a case should link to these as needed.
- `agent-atlas-frontier-v1`: browser-local case-completion store. It is **separate** from the existing `agent-atlas-progress-v1` six-track progress; no cross-device syncing or verified certification is implied.

As the catalog grows, move Case 001 into the shared renderer without breaking its current public URL, then generate navigation from `cases.json` instead of maintaining two representations. Keep clean case URLs stable. Add automated tests for every scenario's calculations and answers, plus a link checker. Do not auto-publish research summaries without human editorial review.

## Case editorial workflow

1. Nominate a frontier problem. Link credible primary sources and record the publication dates.
2. Rate significance, depth, novelty, accessibility and suitability for testable exercises. Avoid hype-only claims.
3. Create a synthetic but realistic dataset with a clearly documented answer; never expose real customer data.
4. Map prerequisite concepts to stable IDs shared with tracks and other cases.
5. Produce explanation, multiple counter-hypotheses, simulation, solutions, assessment and a decision memo rubric.
6. Verify calculations, exercise solutions, accessibility, mobile layout and tool links.
7. Publish on GitHub Pages. Mark the case complete **only after** hands-on review.
8. Revisit at a stated interval. Update stale technical claims and archive superseded practices while keeping permanent references.

## Problem-first learning, responsibly

The pedagogical influence is Manu Kapur's productive failure: a well-chosen complex problem prepares students for subsequent explanation. It does **not** imply novices should be abandoned without scaffolding, nor that anyone can achieve expertise in days. Consulting-style hypothesis formation, issue trees, analysis and feedback complement worked examples and spaced practice.

References: [Kapur, Productive Failure in Learning Math](https://pubmed.ncbi.nlm.nih.gov/24628487/); [McKinsey on development](https://www.mckinsey.com/careers/life-at-mckinsey/our-culture-and-communities/careers-blog/learning); [BCG on career growth](https://careers.bcg.com/global/en/career-growth-opportunities); [Stanford AI Index 2026](https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf); [METR frontier risk, May 2026](https://metr.org/blog/2026-05-19-frontier-risk-report/).

## Not yet implemented

Data-driven catalog navigation, account-based syncing, live conversational tutoring, server-graded written deliverables, automated frontier-source ingestion, narrated video and automated real-tool execution. Case 001 still uses its original page logic; cases 002–005 share the new runner. A static GitHub Pages site cannot securely host a private model API key; future tutoring requires an appropriately authenticated backend and privacy policy. Cases 006–007 remain planned rather than presented as completed lessons.

