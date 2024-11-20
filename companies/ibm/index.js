// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let left = [];
//   let right = []
//   let pivot = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   return quickSort(left).concat(pivot).concat(quickSort(right))
// }

// function mergeTwoSortedArr(arr1, arr2) {
//   let mergedArr = arr1.concat(arr2);
//   // remove duplicate
//   let mergedArrUnique = [...new Set(mergedArr)]
//   // do quick sort
//   return quickSort(mergedArrUnique)
// }

// console.log(mergeTwoSortedArr([21, 22, 22, 23, 24, 95, 98, 1000], [3, 3, 3, 21, 24, 99]))

// function mergedArrAndSort(arr1, arr2) {


//   let result = []

//   let j = 0;
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] < arr1[j]) {
//       result.push(arr2[i])
//     } else {
// result.push(arr2[j])
//       j++;
//     }
//   }
//   return result;
// }

// function removeDuplicates(arr) {
//   let resultMap = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (!resultMap.get(arr[i])) {
//       resultMap.set(arr[i], true)
//     }
//   }
//   return Array.from(resultMap.keys());
// }

// console.log(removeDuplicates([1, 2, 2, 3, 3]))

function mergeTwoSortedArr(arr1, arr2) {

  let result = []
  let i = 0;
  let j = 0;

  // Merge two sorted arrays into single sorted array

  // Compare elements from both arrays and add the smallest one to result
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++;
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j])
      j++;
    } else {
      result.push(arr1[i])
      i++;
      j++;
    }
  }

  // below loops run only for once for the remaining elements in any one array

  // Add remaining elements from arr1
  while (i < arr1.length) {
    result.push(arr1[i])
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    result.push(arr2[j])
    j++;
  }
  // Remove duplicates from the result array
  return [...new Set(result)];
}
console.log(mergeTwoSortedArr([21, 22, 22, 23, 24, 95, 98, 1000], [3, 3, 3, 21, 24, 99]))