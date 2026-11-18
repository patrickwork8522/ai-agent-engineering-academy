# Course 04 — Multi-Agent Systems and Orchestration

**Level:** Advanced applied design. **Study time:** 35–55 hours.  
**Prerequisites:** [Agent Engineering](03-engineering.md) concepts of tool loops, state, evaluation and permissions.  
**Outcome:** Build and evaluate a system with multiple specialized workers without assuming more agents automatically means better results.

## Lesson M1 — Why multiple agents?

A multi-agent system distributes a task among components that can reason, use tools or produce specialized results. But splitting work creates coordination overhead, communication complexity and additional model calls. A single agent with well-designed tools is often simpler, cheaper and more reliable. Begin by asking what separation improves: independent evidence gathering, parallel specialized work, role-specific permissions, or independent review.

Common patterns:

1. **Router:** Send a request to one specialist based on its category.
2. **Supervisor:** A coordinator assigns sub-tasks and combines results.
3. **Parallel workers:** Independent specialists investigate complementary angles.
4. **Reviewer loop:** One worker drafts, another critiques, and the host accepts, revises or escalates.
5. **Workflow with agentic steps:** Deterministic state machine controlling a few flexible decisions.

### Worked example

An app-market research system might have a researcher for competitor evidence, an analyst for cost scenarios and a reviewer for unsupported claims. A supervisor assembles the report. The reviewer should not simply agree with the analyst; it needs access to explicit sources and a rubric. If a single well-instructed model can do the whole task as accurately at lower cost, keep the simpler design.

### Exercise M1

Take a one-hour research task and propose (A) a single-agent approach and (B) a three-worker approach. Estimate number of model calls, handoffs, elapsed time, cost and points of failure. State what measured result would justify B.

## Lesson M2 — Contracts, messages and state

Agents need a reliable **task contract**, not a vague instruction to "collaborate." Define `task_id`, role, goal, allowed inputs, allowed tools, deadline, output schema, evidence references and status. Pass a concise task package rather than the entire conversation to every worker. The orchestrator maintains state and does not let workers arbitrarily grant themselves new tools.

```json
{
  "task_id": "research-001",
  "role": "competitor_research",
  "goal": "Find documented alternatives to voice shift handover",
  "allowed_tools": ["search_sources", "read_source"],
  "deadline_seconds": 120,
  "output_schema": "competitor_evidence_v1"
}
```

### State and ownership

Each task should move through states such as `PENDING → RUNNING → DONE`, with explicit `FAILED`, `TIMED_OUT` and `AWAITING_REVIEW`. Store transitions in a checkpoint or task database. Protect against double execution by using task IDs and idempotent handoffs. If a worker fails after partially writing a report, the coordinator should know what completed and what remains uncertain.

### Exercise M2

Design a schema for a worker result with `claims`, `sources`, `confidence`, `limitations`, `cost`, and `status`. Write five validation rules. Simulate a worker returning no sources, an invalid status and a timed-out task; define the coordinator's response.

## Lesson M3 — Parallelism and dependency planning

Some jobs can run concurrently; others depend on earlier results. A researcher can find existing products while a separate analyst studies typical customer workflows, but a financial estimate requiring verified competitor prices should wait for evidence. Parallelism saves elapsed time only when tasks are sufficiently independent and tool/model rate limits permit it.

Use a dependency graph. Make task owners and completion criteria explicit. Cap active workers and total model budget. Avoid recursive delegation without depth limits. Review rate limits, privacy boundaries and the risk of multiple workers changing the same external record.

### Worked timing exercise

Suppose three independent tasks take 4, 5 and 7 minutes. Sequential time is 16 minutes. Perfect parallel time would be 7 minutes, but real coordination, queueing and review might add 3 minutes. If all three agents use the same bottlenecked external service, concurrency may bring little benefit and more rate-limit failures.

### Exercise M3

Draw a dependency graph for a product opportunity report: market sources, competitor prices, interviews, cost scenarios, reviewer, final memo. Identify tasks safe to parallelize and tasks that must wait. Include a maximum worker count and timeout behavior.

## Lesson M4 — Review, disagreement and failure recovery

Independent review is valuable only if it uses a clear rubric and evidence. A reviewer should check whether claims have directly supporting sources, calculations are internally consistent, dates are appropriate and unknowns remain labeled. An LLM reviewing another LLM can repeat the same mistakes; deterministic checks and human judgment still matter.

**Disagreement protocol:** collect conflicting claims → compare source quality and dates → run a bounded verification step → report uncertainty if unresolved. Do not allow endless "critic vs writer" debates. Define revision limits. Preserve earlier evidence so a retry doesn't silently discard it.

**Operational recovery:** detect timeout; retry only when safe; avoid duplicate writes; checkpoint intermediate output; route persistent failure to human review; log the entire task chain. If a worker requests a privileged tool outside its contract, reject it and report the attempt.

### Exercise M4

The researcher reports a competitor price of £20/month, the analyst uses £10, and the reviewer finds that pricing varies by billing period. Write a three-step resolution protocol. Then construct an adversarial source document containing an instruction to reveal unrelated files. Explain why no worker should have that capability.

## Lesson M5 — Evaluation: is teamwork worth it?

Build a benchmark with at least 20 tasks representing simple, medium and hard cases. Compare one agent against the multi-agent workflow using the **same input set**. Record correctness, evidence coverage, latency, total token/tool cost, failure rate, review effort and unauthorized side effects. Report medians and variation; avoid selecting only showcase tasks.

### Example result interpretation

If multi-agent quality increases from 70% to 78% but cost triples and latency doubles, whether it is worthwhile depends on the use case and how valuable the improvement is. If simple tasks show no benefit, route them to the single-agent path and reserve specialists for complex investigations.

### Exercise M5

Design an evaluation sheet with case ID, task complexity, expected outcomes, evidence criteria, single-agent result, multi-agent result, costs and time. Define a precommitted decision rule such as "use multi-agent only when complex-task success improves by at least X percentage points within Y cost ceiling." Set X and Y based on your actual objectives.

## Multi-agent capstone — A research and review team

Build a coordinator with three roles:

- **Evidence researcher:** gathers and cites permitted sources.
- **Business analyst:** generates transparent assumptions and scenario calculations.
- **Independent reviewer:** checks claims and challenges unsupported inferences.

Use a mock model first, with canned tool outputs, to test orchestration deterministically. Then optionally connect real model APIs within a spending limit. The coordinator must produce a final memo containing evidence, assumptions, unresolved questions and the full task trace.

**Deliverables:** Task schema, state diagram, minimal implementation, failure-injection results, 20-case benchmark, cost/quality comparison with a single-agent baseline and a five-minute technical demo.

**Pass criteria:** Specialists cannot self-escalate permissions; all tasks terminate; source-free claims are flagged; conflicts are resolved or disclosed; at least one justified use of multi-agent architecture is demonstrated.

## Further study

- [LangGraph Python documentation](https://docs.langchain.com/oss/python/learn) for orchestrated state machines and persistence.
- [Microsoft AutoGen repository](https://github.com/microsoft/autogen) and [CrewAI repository](https://github.com/crewAIInc/crewAI) to compare framework conventions.
- [Model Context Protocol](https://modelcontextprotocol.io/introduction) for standardized tool access. MCP connectivity does not replace authorization or validation.

**Video suggestion:** An animated side-by-side comparison of single-agent and supervisor-worker workflows with the same task, including timing and cost counters. Render and benchmark the actual examples before calling it a performance comparison.
