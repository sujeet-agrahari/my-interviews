
function isBalanced(s) {
  const stack = [];
  const matchingParenthesis = { ")": "(", "}": "{", "]": "[" };

  for (const char of s) {
    if (Object.values(matchingParenthesis).includes(char)) {
      stack.push(char);
    } else if (Object.keys(matchingParenthesis).includes(char)) {
      if (!stack.length || stack.pop() !== matchingParenthesis[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example usage
console.log(isBalanced("(){}[]"));  // True
console.log(isBalanced("([{}])"));  // True
console.log(isBalanced("(]"));      // False
console.log(isBalanced("({[)]"));   // False