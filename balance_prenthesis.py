def is_balanced(s: str) -> bool:
    stack = []
    matching_parenthesis = {")": "(", "}": "{", "]": "["}

    for char in s:
        if char in matching_parenthesis.values():
            stack.append(char)
        elif char in matching_parenthesis.keys():
            if not stack or stack.pop() != matching_parenthesis[char]:
                return False

    return not stack


# Example usage
print(is_balanced("(){}[]"))  # True
print(is_balanced("([{}])"))  # True
print(is_balanced("(]"))  # False
print(is_balanced("({[)]"))  # False
