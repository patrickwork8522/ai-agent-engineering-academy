# Lab — Build a tiny tool dispatcher without AI

**Estimated time:** 20–35 minutes. **Prerequisite:** Foundation Tool Calling. **Cost:** Free (standard-library Python only).

The goal is to understand the boundary between a suggested tool call and actual execution before wiring an LLM API.

## Run

```bash
python3 labs/tool-dispatch/main.py
python3 -m unittest discover -s labs/tool-dispatch -p 'test_*.py'
```

## Challenges

1. Add a `multiply(a,b)` function and register it.
2. Add a test rejecting `{"a":"2","b":3}` (numeric strings are not accepted).
3. Add a tool that counts rows in a synthetic CSV file in a fixed permitted directory, without accepting arbitrary absolute paths.
4. Explain why `eval()` or shell execution is inappropriate for this exercise.

**Reflection:** If a model returns `delete_all_files`, what should your dispatcher do? The correct behavior is to reject the name, not search for a similar dangerous function.
