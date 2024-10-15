def target_sum_unsorted(arr, target):
    visited_num_indexes = {}
    for i in range(len(arr) - 1):
        complement = arr[i] - target
        if complement in visited_num_indexes:
            return [visited_num_indexes[complement], i]
        visited_num_indexes[complement] = i
    return None


# Example usage
arr = [5, 2, 9, 1, 5, 6]
target = 10
result = target_sum_unsorted(arr, target)
print(result)  # Output: [0, 2] because arr[0] + arr[2] = 5 + 5 = 10
