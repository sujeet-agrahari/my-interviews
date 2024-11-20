const isBalanced = require('./parenthesis/balanceParanthesis');

console.log(isBalanced("(){}[]"));  // True
console.log(isBalanced("([{}])"));  // True
console.log(isBalanced("(]"));      // False
console.log(isBalanced("({[)]"));   // False

const arr = [2, 1, 1, 5];

const getFirstRepeatedEle = (arr) => {
  const occ = {};
  for (let i = 0; i < arr.length; i++) {
    if (occ[arr[i]]) {
      return arr[i];
    }
    occ[arr[i]] = true;
  }
};

// console.log(getFirstRepeatedEle(arr));

function isSame(arr1, arr2) {
  const hash = {};
  arr2.forEach((el) => {
    if (hash[el]) {
      hash[el] += 1;
    } else {
      hash[el] = 1;
    }
  });
  for (let i = 0; i < arr1.length; i++) {
    if (!hash[arr1[i] * arr1[i]]) {
      return false;
    } else {
      hash[arr1[i] * arr1[i]] -= 1;
    }
  }
  return true;
}
// console.log(isSame([1, 2, 3, 2], [4, 1, 9, 4]));
// require('./linked-list');

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const hash = {};
  [...str2].forEach((el) => {
    if (hash[el]) {
      hash[el] += 1;
    } else {
      hash[el] = 1;
    }
  });
  for (let i = 0; i < str1.length; i++) {
    if (!hash[str1[i]]) {
      return false;
    } else {
      hash[str1[i] * str1[i]] -= 1;
    }
  }
  return true;
}
// console.log(validAnagram('texttwisttime', 'timetwisttext'));

function twoPointer(arr) {
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    console.log(arr[i]);
    console.log(arr[j]);
    console.log('it ran');
  }
}

function sumZero(arr) {
  for (let i = 0, j = arr.length - 1; i <= j;) {
    const sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
    }
  }
}

function countUniqueValues(arr) {
  if (!arr.length) {
    return 0;
  }
  // const hash = {};
  // for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
  //   hash[arr[i]] = hash[arr[i]] ? hash[arr[i]] + 1 : 1;
  //   hash[arr[j]] = hash[arr[j]] ? hash[arr[j]] + 1 : 1;
  // }
  // return Object.keys(hash).filter((key) => hash[key] === 1).length;
  let i = 0;
  for (let j = i + 1; j < arr.length;) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      arr[i + 1] = arr[j];
      j++;
      i++;
    }
  }
  return i + 1;
}
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
// console.log(countUniqueValues([]));

function maxSubArraySum(arr, n) {
  let sum = arr.slice(0, n).reduce((sum, item) => sum + item, 0);
  for (let i = 1, j = n; j < arr.length; i++, j++) {
    let newSum = sum - arr[i - 1] + arr[j];
    sum = Math.max(newSum, sum);
  }
  return sum;
}

// console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));

function sockMerchant(arr, n) {
  const hash = {};
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      ans++;
      delete hash[arr[i]];
    } else {
      hash[arr[i]] = arr[i];
    }
  }

  return ans;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]));
