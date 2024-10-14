def two_pointer_sort(arr):
    left = 0
    right = len(arr) - 1

    while left < right:
        if arr[left] > arr[right]:
            arr[left], arr[right] = arr[right], arr[left]  # Swap elements if needed
        left += 1
        right -= 1

    return arr

# Example usage:
unsorted_array = [5, 2, 9, 1, 5, 6]
sorted_array = two_pointer_sort(unsorted_array)
print(sorted_array)