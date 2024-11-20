def find_second_largest(arr):
    if len(arr) < 2:
        return None

    first, second = float("-inf"), float("-inf")
    for num in arr:
        if num > first:
            first, second = num, first
        elif first > num > second:
            second = num

    return second if second != float("-inf") else None


print(find_second_largest([1, 2, 2, 2]))
