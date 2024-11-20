def is_balanced(s: str) -> bool:
    """
    # Idea:
    # 1. Use a stack to store opening parentheses.
    # 2. Iterate through each character in the string.
    # 3. If the character is an opening parenthesis, push it onto the stack.
    # 4. If the character is a closing parenthesis, check if it matches the
    #    most recent opening parenthesis in the stack.
    # 5. If it matches, pop the opening parenthesis from the stack.
    # 6. If it doesn't match or the stack is empty, return False.
    # 7. After processing all characters, return True if the stack is empty,
    #    indicating all parentheses were matched.
    """
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
