def recursive_sum(arr):
  if len(arr) == 1:
    return arr[0]
  return arr.pop() + recursive_sum(arr)

print(recursive_sum([1,2,3, 10, -9]))