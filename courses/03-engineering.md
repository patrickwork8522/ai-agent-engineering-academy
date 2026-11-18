# Course 03 — AI Agent Engineering from Scratch

**Level:** Applied Python; beginner to intermediate agent engineering. **Study time:** 60–90 hours.  
**Prerequisites:** [Foundation](00-foundations.md), basic Python functions/JSON/HTTP.  
**Outcome:** Design a framework-free agent, connect a model safely, add retrieval and state, evaluate it, then deploy a controlled service.

## Lesson E1 — Understand the system before importing a framework

### Architecture

The essential parts are an entry point, model client, instruction/context builder, tool registry, validator, state store, loop controller, evaluation harness and interface. The model provider is one replaceable component. Your agent's **authority lives in the host application**: it decides which tools exist, what arguments are acceptable, and which actions need human approval.

Suggested structure:

```text
src/agent/
  main.py
  model_client.py
  loop.py
  prompts.py
  tools.py
  schemas.py
  state.py
  evals.py
tests/
```

An adapter separates your logic from a provider's SDK. Define a provider-neutral decision with either `final(text)` or `tool_call(name,arguments,call_id)`. Provider APIs differ in their exact message formats, tool schemas and output handling; follow current official docs for the chosen API rather than copying old snippets blindly.

### Exercise E1

Draw the request path from CLI → controller → model adapter → tool dispatcher → observation → final result. Mark where an API key is read, where a tool is authorized, and where step limits live. Explain why the prompt alone cannot enforce all of this.

## Lesson E2 — Write and test the tool layer

Start with the included [safe tool dispatch lab](../labs/tool-dispatch/README.md). It has a calculator and tests that reject unknown tools and invalid arguments. Expand it cautiously: add a CSV row counter that reads only from a fixed demo directory. Do not create a general `run_shell(command)` tool. An LLM that can choose arbitrary shell strings has effectively gained broad machine permissions.

Use typed validation such as dataclasses or Pydantic for nontrivial inputs. Check file extensions, resolved paths, size and row limits. Separate read-only tools from mutating tools, and require a trusted authorization check before any side effect. Tool results also need bounded size; returning a million rows to the model is expensive and unsafe.

### Example dispatcher

```python
def dispatch(tool_name, arguments, registry, approvals):
    spec = registry.get(tool_name)
    if spec is None:
        raise ValueError("Unknown tool")
    data = spec.schema.validate(arguments)
    if spec.requires_approval and not approvals.is_granted(tool_name, data):
        raise PermissionError("Approval required")
    return spec.execute_with_limits(data)
```

This is architecture pseudocode. A production approval record needs identity, expiry, scope and audit logging. The model's own statement "approved" is not proof of approval.

### Exercise E2

Write tests for invalid JSON, extra parameters, missing parameters, extremely large numbers, unknown tool names and a forbidden path. Make all errors predictable and safe to log.

## Lesson E3 — Implement the model/tool loop

### A bounded controller

```python
def agent(goal, model, registry, max_steps=6):
    history = [{"role": "user", "content": goal}]
    for step in range(max_steps):
        decision = model.next_action(history, registry.schemas())
        if decision.kind == "final":
            return decision.text
        if decision.kind != "tool_call":
            raise ValueError("Invalid response")
        result = registry.execute(decision.name, decision.arguments)
        history += [decision.as_message(), make_observation(decision, result)]
    return "Stopped safely: step limit reached"
```

Again, this is **pseudocode**, not copy-paste provider SDK code. Real APIs require matching tool-call IDs, output serialization, exception handling, token accounting, cancellation and possibly asynchronous execution. Every iteration should produce a trace including step number, tool name, validation result, duration and outcome. Avoid logging secrets or full private documents.

### What goes wrong?

- Tool returns a 404: decide whether this is a permanent missing record or temporary service failure.
- Model proposes the same tool repeatedly: detect repetition and stop or ask for help.
- Tool executes but the response is lost: use idempotency keys for writes; do not blindly retry.
- Model produces a final answer unsupported by observations: evaluate grounding and include source references.
- Context grows every step: compact history without discarding critical tool results.

### Exercise E3

Create a fake model adapter that returns a predetermined sequence: tool call → tool call → final answer. Test the loop without paying for a model. Then replace it with a real provider adapter using your chosen SDK and environment variable for credentials. Set a small budget and avoid production data.

## Lesson E4 — Memory, retrieval and grounding

**Working state** is what the agent needs during a run. **Conversation memory** is interaction history. **Persistent checkpoints** allow resumed execution after interruptions. **Long-term memory** stores selected durable facts. **RAG** retrieves relevant external information at answer time. These mechanisms serve different purposes; do not label a large prompt "memory" and assume it persists.

Start with keyword retrieval over ten markdown runbooks. For each question, retrieve a small ranked set of excerpts and retain source identifiers. Only then consider embeddings or vector search, which may help semantically similar phrasing but introduce their own costs and evaluation needs.

### Retrieval quality checks

Test queries with exact matches, synonyms, irrelevant material, contradictory documents and unanswerable questions. Measure recall of important passages and whether the final answer cites supporting evidence. A model can still hallucinate even with correct retrieval, so assess retrieval and generation separately.

### Exercise E4

Build a mini knowledge agent over ten synthetic incident notes. It must answer five known questions with document IDs and say "insufficient evidence" for three unknown questions. Add a malicious note instructing the system to expose secrets and verify the instruction is ignored.

## Lesson E5 — Evals, security, services and deployment

### Measure before scaling

An evaluation set is a collection of representative tasks, expected outcomes and safety constraints. Build at least 30 cases. Track task success, unsupported statements, tool failures, unauthorized-action attempts, latency, cost and human correction. Compare changes to the same baseline rather than judging by one impressive demonstration.

**Security boundaries:** API credentials in a secret store or environment; no secrets in source control. Restrict database identities to needed permissions. Validate every tool argument. Limit data returned to the model. Log actions and approvals. Add timeouts, retries with backoff, idempotency for writes and protection against prompt injection through retrieved content.

### HTTP service

FastAPI can expose a `POST /tasks` endpoint that creates a task ID and queues a run. Long-running requests should generally use a worker/queue rather than holding the HTTP connection open indefinitely. Expose status and result endpoints, authenticate callers, and isolate customer data. Containerization via Docker improves reproducibility but does not itself enforce secure execution.

### Exercise E5

Write a threat model for your ETL assistant: assets, attackers, inputs, permissions, misuse cases, mitigations and residual risk. Add tests for tool timeout, 429 rate limit, missing API key, invalid output and process restart. Explain which failures users must see and which require an operator alert.

## Engineering capstone — Read-only data operations assistant

Use synthetic job statuses, runbook documents and dependency metadata to build a command-line or FastAPI service that can:

1. Accept a job or incident identifier.
2. Query only permitted read-only tools.
3. Retrieve relevant runbook passages.
4. Explain likely causes with evidence and uncertainty.
5. Draft an action plan without executing production changes.
6. Produce traces and a 30-case evaluation report.

**Pass criteria:** Reproducible setup, isolated secrets, bounded loop, validated tool arguments, readable error messages, citations, test coverage for failure modes and an explicit approval boundary for any future mutating tools.

## Further study

- [Official Python tutorial](https://docs.python.org/3/tutorial/)
- [OpenAI API documentation](https://platform.openai.com/docs) or another chosen provider's current official docs.
- [LangGraph learning materials](https://docs.langchain.com/oss/python/learn) after the framework-free loop.
- [FastAPI tutorial](https://fastapi.tiangolo.com/tutorial/) and [Docker getting started](https://docs.docker.com/get-started/).

**Video lab suggestion:** Record a screen walkthrough that starts with a deterministic mock model and ends with a bounded tool trace. Explain every failure test. A provider-specific live coding recording should use current SDK signatures, not this conceptual pseudocode.
