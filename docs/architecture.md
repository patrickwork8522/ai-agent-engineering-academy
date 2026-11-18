# Curriculum architecture and roadmap

## Principle

An open-ended learning map, not a mandatory linear course. Learners may enter through a use case, concept, or industry opportunity and follow the prerequisite graph.

## Stable module IDs

- `f-*`: shared foundation, completed once.
- `b-*`: business and market specialization.
- `n-*`: no-code and low-code specialization.
- `e-*`: engineering and evaluation specialization.
- `m-*`: multi-agent specialization.
- `p-*`: product launch specialization.

Course-to-module mapping is stored in `academy/data.js`. When a learner completes `f-tools`, the no-code and engineering courses both credit it. Specialists may link to that same conceptual lesson and add deeper practice separately.

## Course completion

1. Pass each referenced module's short knowledge check.
2. Mark each module complete after reading and doing the associated task.
3. A course trophy appears once its referenced module set is complete.

This first version uses self-reported practice and local storage. It is designed as motivation, **not a formal assessment or identity-backed credential**. A future backend could sync progress across devices with an account. Never collect user data without explaining retention and access.

## Content contract for new lessons

Every important topic should provide:

1. A plain-language goal and analogy.
2. A visual depiction, simulation or direct live demonstration.
3. A grounded real-world use case and explicit limits.
4. A short comprehension question with corrective feedback.
5. A practical no-code or coding path where appropriate.
6. Links to primary documentation and a source-verification date.
7. A time estimate and completion criteria.

Video policy: link to official videos where relevant, prepare original scripts/storyboards, and label recorded/rendered assets separately. Do not present narration drafts as published video.

## Release roadmap

**Release 1 (this repository):** static responsive site, six tracks, 30 first-edition textbook lessons, thirteen interactive checkpoints, three agent-loop simulations, quizzes, progress, six open-source case studies, introductory Python exercise and one detailed video script.

**Release 2:** deeper no-code guided builds, a realistic market validation lab, working CSV/ETL case, cost calculator, recorded concept videos, project rubrics, tests and accessibility review.

**Release 3:** opt-in LLM-backed playground with usage limits, safe tool permissions, approval flows, session checkpoints, reusable scenario templates and optional hosted progress.

**Release 4:** production capstones, comparison benchmarks (single vs multi-agent), human review workflows, detailed security and governance practice.

## Quality controls

Check every module for duplication and broken references. Maintain versioned content and require citations or source links for time-sensitive market claims. Treat financial projections as assumptions. Run keyboard/accessibility and mobile-size checks on the UI. Never deploy privileged credentials to static JavaScript.
