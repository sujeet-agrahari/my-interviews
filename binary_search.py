import math

def binary_search(arr, target):
  low = 0
  high = len(arr) - 1
  while low <= high:
    mid = math.ceil((low + high) / 2)
    guess = arr[mid]
    if guess == target:
      return mid
    elif guess < target:
      low = mid + 1
    elif guess > target:
      high = mid - 1
  return None
print(binary_search([1, 2, 3, 4], 4))