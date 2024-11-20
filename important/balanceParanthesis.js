/**
 * Checks if the given string of parentheses is balanced.
 * 
 * The function uses a stack to keep track of opening parentheses and ensures that each closing parenthesis matches the most recent opening one.
 * 
 * @param {string} s - The string containing parentheses to be checked.
 * @returns {boolean} - Returns true if the string is balanced, otherwise false.
 */
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
