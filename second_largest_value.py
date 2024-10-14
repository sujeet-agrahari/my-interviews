def find_second_largest(arr):

  left_i = 0
  right_i = len(arr) - 1

  left_max = arr[left_i]
  right_max = arr[right_i]

  while left_i <= right_i:

    if left_i == right_i and arr[left_i] > left_max:
      left_max = arr[left_i]
      break

    if arr[left_i] > left_max and arr[left_i] != right_max:
      left_max = arr[left_i]

    if arr[right_i] > right_max and arr[right_i] != left_max:
      right_max = arr[right_i]

    left_i += 1
    right_i -= 1
  return min(left_max, right_max)

print(find_second_largest([1, 2, 2, 2]))