"""Small deterministic tool dispatcher; no model calls or network access."""


def add(a: float, b: float) -> float:
    return a + b


TOOLS = {"add": add}


def execute(name: str, arguments: dict) -> float:
    if name not in TOOLS:
        raise ValueError("Unknown or disallowed tool")
    if not isinstance(arguments, dict) or set(arguments) != {"a", "b"}:
        raise ValueError("Expected exactly a and b")
    if any(type(arguments[k]) not in (float, int) for k in ("a", "b")):
        raise ValueError("Both arguments must be numbers")
    return TOOLS[name](**arguments)


if __name__ == "__main__":
    print("Tool call:", {"name": "add", "arguments": {"a": 2, "b": 3}})
    print("Tool result:", execute("add", {"a": 2, "b": 3}))
