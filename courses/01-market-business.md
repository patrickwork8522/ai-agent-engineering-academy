# Course 01 — AI Agent Market, Opportunity and Business

**Level:** Beginner business strategy. **Study time:** 20–30 hours.  
**Prerequisite:** [Foundations](00-foundations.md), especially agent vs workflow and safety.  
**Outcome:** Research a concrete market, identify a paying customer, validate demand and build an evidence-led business case for an agent product.

> This course teaches market research methods and unit economics. It does **not** claim a current market size, popularity ranking, or expected commercial return without fresh evidence. Verify pricing and competition when executing a project.

## Lesson B1 — Find a job worth solving

### The problem-first mindset

People do not normally pay for "an AI agent." They pay to save time, reduce errors, meet compliance requirements, win revenue or remove an unpleasant task. Start with a **job to be done**, not an LLM capability. A useful job statement names a person, a context, an action and a measurable outcome.

Weak: "An AI app for field workers." Stronger: "A shift supervisor needs to hand over unresolved maintenance issues in less than five minutes, with equipment IDs and accountability preserved." The second identifies a situation you can observe and test. It also exposes difficult requirements: noisy speech, offline use, privacy, shared devices, audit trails and handover disputes.

### Map an existing workflow

Interview someone about the **last real time** they did the task. What triggered it? Which tools and files did they touch? Where was information retyped? How often did they correct errors? Who consumes the output? What happens if it is wrong? Do not ask only "Would you use an AI app?"—people often say yes to attractive hypotheticals.

Create a workflow map with columns: trigger, input, current tools, manual work, output, owner, frequency, pain, current cost. Mark whether a step truly needs inference. OCR, transcription and categorization may benefit from models; totals, due dates and invoice math should usually be deterministic.

### Worked example: voice job log

A technician finishes a repair and records a 45-second voice note. The proposed app transcribes, extracts site/equipment/work done/parts used, asks for missing details and generates a structured log. Existing substitutes include paper forms, WhatsApp voice messages, field-service software and generic transcription apps. The product's differentiation would need to come from the **entire workflow**—structured fields, handover quality, integration, reliability and ease of adoption—not simply speech-to-text.

### Exercise B1

Pick three ideas: voice shift-handover, travel expense organizer, and CSV exception reporting for small businesses. For each, write the specific buyer, daily user, trigger, alternatives, frequency and measurable benefit. Score pain from 1–5 and explain each score with evidence or explicitly label it an assumption.

## Lesson B2 — Competitors, substitutes and market research

### Three layers of competition

**Direct competitors** promise essentially the same outcome. **Adjacent tools** solve some of the workflow (for example transcription without shift handover). **Non-software substitutes** are spreadsheets, group chats, paper and a human assistant. A product can fail despite having no identical AI competitor because users are satisfied with their current workaround.

Separate **total market** (everyone with the general problem), **serviceable market** (those you can reasonably reach and support) and **initial beachhead** (one narrow segment with a strong reason to try now). Broad global AI market size is rarely the most useful number for a solo founder. A list of 50 reachable potential buyers in one vertical can be more actionable than a speculative billion-pound total.

### Competitor research worksheet

| Field | What to record |
|---|---|
| Buyer/user | Who pays, who works in the app, who approves it |
| Workflow | Input → transformation → output |
| Current product | Features and constraints supported by verified documentation |
| Pricing | Plan, limits, usage charges, source and verification date |
| Trust | Privacy, access controls, exportability, human review |
| Adoption | Setup time, mobile support, offline capability, training burden |
| Weak spots | Evidence from reviews/interviews; not unsupported guesses |

Do not confuse GitHub stars, social mentions or app downloads with paying customers. Do not interpret a competitor's published price as their real margin. Keep evidence, inference and unknowns in different columns.

### Exercise B2

Research three current solutions for one idea from official websites, pricing pages and user reviews. Capture exact source URLs and dates. Add paper/spreadsheet/manual workaround as a fourth competitor. Explain one specific feature or niche that might make switching worthwhile. If no plausible difference emerges, write that conclusion openly.

## Lesson B3 — Pricing and unit economics

### Revenue is not profit

An agent product may generate revenue but still lose money through model usage, transcription, hosting, file storage, payment fees, customer support, integrations, error correction and marketing. For a small subscription SaaS, model costs can be low or high depending on usage patterns; you must estimate per-customer consumption rather than assuming a fixed universal cost.

Define:

\[
\text{Gross profit per user} = \text{Revenue per user} - \text{Variable cost per user}
\]

\[
\text{Contribution after acquisition} = \text{Gross profit} - \text{Acquisition cost allocation}
\]

Illustrative scenario—not a price quote or prediction: a customer pays £12/month; model/transcription use costs £2, infrastructure £1, payment processing £0.60 and variable support £1.40. Contribution before acquisition and fixed costs is £7. A £50 acquisition cost would take roughly 7.1 months to recover if the £7 contribution remains stable and the customer stays. Churn, refunds and tax can change the outcome materially.

### Cost sensitivities

Test light, typical and heavy users. Speech agents may have per-minute transcription and storage costs; research agents may incur search/tool call fees; document agents may need embeddings and storage. Guard against expensive loops, retries, large contexts and abusive requests. Plan a monthly spending ceiling and measure actual cost per completed useful task.

### Exercise B3

Build a spreadsheet with 10, 100 and 1,000 customers and three usage levels. Change subscription price, average tasks, tokens/task, hosting, support and churn assumptions. Calculate revenue, variable cost, contribution and breakeven customers. Identify which assumption most affects the result. Do **not** call your scenario an expected return unless validated with data.

## Lesson B4 — Validate with people, not compliments

### The evidence ladder

An interesting idea ranks low. Interview evidence is better. A person spending time to test a real prototype is better still. Repeated usage, paid pilots and renewals are stronger signals, although small samples remain uncertain. Ask about behavior: "Tell me about the last time you lost a handover note," not "Would you pay £15 for AI handovers?"

### A two-week validation sprint

**Days 1–3:** Write a one-sentence problem and customer segment. List 20 potential interview contacts and existing alternatives. **Days 4–7:** Conduct 5–8 focused interviews and log exact pains. **Days 8–10:** Build a clickable or concierge prototype with synthetic or consented data. **Days 11–14:** Observe 3–5 target users perform a real task, record errors and time, and ask for a concrete follow-up action.

Predefine success and failure criteria. Example: at least three participants independently complete the core workflow, at least two request another trial, and correction time is below their existing manual method. These are hypothetical pilot gates; choose thresholds appropriate to your product.

### Concierge versus automated MVP

For an early test, you can manually process some backend steps to determine whether the **output** is valuable before investing in automation. Be transparent about what is manual, and preserve privacy. A concierge test is not proof the workflow can be automated profitably, but it may reveal what the customer actually needs.

### Exercise B4

Write six interview questions, a 30-second product pitch and a trial consent statement. Draft a scorecard recording task completion, time, errors, correction effort, value and next-step commitment. Include an explicit rule for stopping or changing direction if the test is disappointing.

## Lesson B5 — Distribution, maintenance and solo-founder feasibility

### The unglamorous work matters

An AI product needs onboarding, billing, support, updates, logs, backups, privacy handling and incident response. A solo founder can operate a narrow product more realistically than a platform for every industry. Integrations with customers' calendars, accounting software or corporate systems can multiply maintenance and security requirements.

Choose an acquisition channel matched to the buyer: direct outreach to a narrow professional segment, a small community, an integration marketplace, educational content with real demos, or partnerships. Broad advertising before a clear buyer and conversion funnel can waste a small budget. Track outreach → response → demo → trial → activation → payment → retention; optimize the bottleneck instead of vanity traffic.

### Build versus buy

No-code tools can accelerate early validation, but inspect workflow limits, hosting control, usage-based pricing, data export and vendor lock-in. Custom code adds flexibility but requires developer maintenance. A hybrid often makes sense: standard authentication/billing/automation services, custom logic only where differentiation matters, and carefully chosen model APIs.

### Worked product shortlist

- **Voice shift-handover:** compelling recurring workflow, but mobile UX, noisy audio, privacy and organizational sales may be demanding.
- **Travel expenses:** understandable personal value and many competitors; differentiation and acquisition may be difficult.
- **CSV exception reporting for SMEs:** clear data-engineering fit and measurable output, but small businesses vary greatly in formats and integration requirements.

These are **hypotheses to test**, not rankings based on current market evidence.

### Exercise B5

Create a weekly maintenance budget: customer service, bugs, vendor updates, monitoring, security, marketing, invoicing. Estimate optimistic and pessimistic hours per customer at 10 and 100 customers. Identify which part you would outsource, automate, simplify or refuse to support.

## Business capstone — Investment memo for a tiny AI product

Create an evidence-backed 6–10-page memo for one of your shortlisted ideas:

1. Problem, customer and job to be done.
2. Current alternatives and three verified competitors.
3. Differentiated workflow and demo storyboard.
4. Evidence from interviews or a clearly labeled validation plan if not conducted.
5. Unit economics under three usage and churn scenarios.
6. Solo-founder operating workload and major failure risks.
7. Acquisition funnel, first 10-customer plan and decision gates.
8. Build/no-code/hybrid choice with rationale.

**Pass criteria:** No invented traction or unsupported market figures; all material claims sourced; buyer and user distinguished; testable assumptions; a credible decision to proceed, change or stop.

## Further study

- Explore current pricing and documentation from products you actually compare, capturing the date.
- Review the academy's [open-source case-study gallery](../academy/index.html#cases).
- Learn no-code validation through [Course 02](02-no-code.md).

**Suggested video production:** A 12-minute screen-recorded case study comparing a voice handover workflow against paper logs, messaging apps and a dedicated field-service product. Show the research sources and mark speculative judgments as hypotheses. No such original video is included yet.
