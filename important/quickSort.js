



/**
* 1. Sort for a pivot: select a pivot in the beginning
* 2. have to pointer one at pivot_position + 1 => low  and another at end => high
* 3. The idea is all the elements to the left of the pivot will be smaller and to the right of the pivot will be larger
* 4. Now start at low and high and following conditions in sort_pivot function
*
* 1st: select a pivot: 1st ele, mid or last
* 2nd: create two arrays: all ele <= pivot & all ele > pivot
* 3rd: recursively apply above logic to both sub arrays
*/
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}
