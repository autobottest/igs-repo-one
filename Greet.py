def greet(name: str, age: int) -> str:
    """Return a friendly greeting with the person's name and age."""
    return f"Hello, {name}! You are {age} years old, which is {age * 365:,} days (give or take a few)."


if __name__ == "__main__":
    print(greet("John", 95))
