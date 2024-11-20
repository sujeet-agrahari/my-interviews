"""
1. Sort for a pivot: select a pivot in the beginning
2. have to pointer one at pivot_position + 1 => low  and another at end => high
3. The idea is all the elements to the left of the pivot will be smaller and to the right of the pivot will be larger
4. Now start at low and high and following conditions in sort_pivot function
"""

"""
1st: select a pivot: 1st ele, mid or last
2nd: create two arrays: all ele <= pivot & all ele > pivot
3rd: recursively apply above logic to both sub arrays
"""


def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[0]
    left_arr = [x for x in arr[1:] if x <= pivot]
    right_arr = [x for x in arr[1:] if x > pivot]
    return quick_sort(left_arr) + [pivot] + quick_sort(right_arr)


# Example usage
print(quick_sort([-1, 0, 2, 5, 9, -10, -20, -123]))
