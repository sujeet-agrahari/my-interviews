def partition(arr):
  pivot_index = 0
  pivot = arr[len(arr) - 1]
  for i in range(pivot_index, len(arr) -1):
    if arr[i] < pivot:
      temp = arr[pivot_index]
      arr[pivot_index] = arr[i]
      arr[i] = temp
      pivot_index += 1
  arr[len(arr) - 1] = arr[pivot_index]
  arr[pivot_index] = pivot
  return pivot_index


def quick_sort(arr):
  if len(arr) < 2: # array with 0 or 1 element are already sorted
    return arr
  pivot_index = partition(arr)
  left = arr[:pivot_index]
  right = arr[pivot_index + 1:]
  return quick_sort(left) + [arr[pivot_index]] + quick_sort(right)

print(quick_sort([0, 1, 6, 9, -10, -1]))
