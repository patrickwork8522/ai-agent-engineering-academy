# Course 05 — Launch a Useful AI Product

**Level:** Practical entrepreneurship. **Study time:** 30–50 hours.  
**Prerequisites:** [AI Market & Business](01-market-business.md), basic agent safety, and either [No-Code](02-no-code.md) or [Engineering](03-engineering.md) for implementation.  
**Outcome:** Validate, prototype, pilot and make an evidence-based launch decision without overbuilding.

## Lesson P1 — Define the smallest valuable promise

A minimum viable product is not the smallest number of features. It is the smallest **complete promise** you can make to a narrow customer and reliably keep. "AI assistant for everyone" is not a usable promise. "Turn a technician's one-minute voice note into a reviewable shift-handover record" is testable.

Write a product specification containing: target user, the one core workflow, input method, output, error states, permission boundaries and success criteria. Mark what will not be built: analytics dashboards, team permissions, integrations or autonomous scheduling unless essential to the first customer. This prevents months of effort on features with no validated need.

### Exercise P1

Choose voice job logs, meeting-to-action capture or CSV exception reporting. Write a one-page MVP specification and a "not in version 1" list of ten tempting features. Identify the minimum trust and privacy expectations even in the prototype.

## Lesson P2 — Prototype and test the complete journey

The core journey includes discovery, onboarding, first input, output review, correction and return use. A model demonstration alone is not a user experience. Build a clickable prototype, no-code flow or small web application that covers one full journey. Track time-to-first-value and how much effort the user spends correcting the output.

### Worked example: CSV exception reporting

User uploads a sample CSV → validator checks a known schema → errors are grouped → AI drafts a plain-language explanation → human reviews and exports a report. On malformed input, show a helpful error and sample fix. On a large file, impose size and processing limits. On unsupported format, do not fabricate success.

### Exercise P2

Invite three users from the intended segment to attempt the workflow without coaching. Record where they hesitate, whether they understand what is automated, whether the result is trustworthy, and what they would do next. Fix the most consequential friction, not just cosmetic details.

## Lesson P3 — Architecture, security and operating cost

A minimal stack might be: static web UI; managed authentication; a small API/workflow runner; managed database/object storage; a model API for genuinely ambiguous tasks; observability and billing as needed. Do not adopt complex microservices, a vector database or multi-agent orchestration simply because they are fashionable.

### Cost categories

1. Fixed: domain, hosting base fee, monitoring and any SaaS subscription.
2. Variable: inference tokens, transcription minutes, OCR, search, storage, bandwidth and workflow executions.
3. Human: support tickets, manual corrections, onboarding, billing disputes and incident response.
4. Growth: content, outreach, paid acquisition, partnerships and sales.

Use a spreadsheet to estimate cost per active customer in low, expected-case and heavy-use scenarios. Set spending limits and abuse controls. Model requests do not necessarily cost much individually, but uncontrolled agent loops or long audio files can materially change cost.

### Exercise P3

Create two architectures: a managed no-code pilot and a hybrid service with custom backend. Estimate setup time, monthly fixed costs, cost per 100 tasks and weekly maintenance. Select one using your actual availability, not only technical elegance.

## Lesson P4 — Find and convert your first customers

Customer acquisition is a process, not an announcement. Find a segment with a recurring painful task and a reachable community. Create a short demonstration showing before/after outcomes. Offer a narrowly scoped pilot, listen to objections and request permission to follow up. Measure qualified outreach, replies, demos, trials, active usage and paid conversion.

### Example outreach experiment

Contact 20 relevant businesses or professionals with a personalized, respectful message describing a task and asking for feedback, not claiming guaranteed savings. Track who responded and what they actually need. If conversations show the problem is not important, change the hypothesis. Do not automate spam or scrape private contacts without permission.

### Exercise P4

Write a landing-page headline, an honest 30-second demo script, five interview questions, an onboarding checklist and two pricing experiments. Define what would count as enough evidence to continue to the next month.

## Lesson P5 — Operations, retention and responsible scaling

Launch brings ongoing responsibilities: service failures, security patches, model changes, vendor costs, backups, privacy requests, customer support and cancellation. Start with a simple operations manual: how to diagnose a failed job, how to notify a user, how to restore data, how to rotate credentials, and what support response you can realistically promise.

Retention matters more than an initial spike of curiosity. Track recurring active users, time saved, correction rate and number of workflows completed—not only page views or total signups. As the product grows, evaluate whether adding agent autonomy actually reduces work without increasing mistakes or support costs.

### Exercise P5

Simulate a bad release where a model starts misclassifying expenses. Design detection, rollback, user messaging, recovery of affected records and a post-incident evaluation. Estimate the time required for a solo founder to handle this while still working a day job.

## Product launch capstone — A 30-day decision-driven pilot

**Week 1:** Verify problem and interview target users.  
**Week 2:** Build one complete workflow with an explicit review step.  
**Week 3:** Run monitored user tests and measure value/errors.  
**Week 4:** Review economics, usability, support demand and willingness to continue/pay. Make a documented go/change/stop decision.

### Final deliverables

- A problem statement and customer segment.
- Evidence from competitor research and actual or planned interviews.
- A working demo with five test cases and visible limitations.
- An operating-cost spreadsheet with sensitivity analysis.
- A concise security/privacy and support plan.
- A realistic first-customer acquisition experiment.
- A launch decision with explicit uncertainty and next steps.

**Pass criteria:** The project is narrow, useful and honestly validated; users can correct results; costs are not hidden; high-impact actions need approval; and you can explain how to operate the service sustainably.

## Further study and practical case links

Explore [n8n](https://github.com/n8n-io/n8n) and [Dify](https://github.com/langgenius/dify) for possible workflow foundations. Use the academy's market/business course to revisit acquisition and pricing assumptions. For current regulatory, privacy or tax obligations affecting a real launch, obtain up-to-date guidance for the relevant jurisdiction.

**Video suggestion:** A build-in-public diary showing customer problem → prototype → recorded task test → metrics → launch decision. Use consented or synthetic data and do not fabricate testimonials or results.
