def sort_pivot(arr):
  pivot = arr[0]
  i = 1
  j = len(arr) - 1

  while i <= j:
    if arr[i] > pivot and arr[j] < pivot:
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i += 1
      j -= 1
    elif arr[i] > pivot and arr[j] > pivot:
      j -= 1
    elif arr[i] < pivot and arr[j] < pivot:
      i += 1
    elif arr[i] < pivot and arr[j] > pivot:
      i += 1
      j -= 1
  temp = arr[j]
  arr[j] = pivot
  arr[0] = temp
  return [j, arr]



def quick_sort(arr):
  if len(arr) == 1 or len(arr) == 0:
    return arr
  [pivot, sorted_arr] = sort_pivot(arr)
  left_arr = sorted_arr[:pivot]
  right_arr = sorted_arr[pivot+1:]
  return quick_sort(left_arr) + [arr[pivot]] + quick_sort(right_arr)
print(quick_sort([-1, 0, 2, 5, 9, -10, -20, -123]))

'''
1. Sort for a pivot: select a pivot in the beginning
2. have to pointer one at pivot_position + 1 => low  and another at end => high
3. The idea is all the elements to the left of the pivot will be smaller and to the right of the pivot will be larger
4. Now start at low and high and following conditions in sort_pivot function
'''