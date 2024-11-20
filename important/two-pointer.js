const findTargetSum = (a, target) => {
  let i = 0;
  let j = a.length - 1;
  while (i < j) {
    if (a[i] + a[j] == target) {
      return [i, j];
    } else if (a[i] + a[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};
const findTargetSumV2 = (a, target) => {
  let seen = {};
  let i = 0;
  while (i < a.length) {
    if (seen[target - a[i]]) {
      return [seen[target - a[i]], i];
    } else {
      seen[a[i]] = i;
      i++;
    }
  }
  return false;
};
console.log(findTargetSumV2([1, 3, 4, 4], 8));
