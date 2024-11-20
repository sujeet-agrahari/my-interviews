def halve_number(n):
    return n >> 1


def double_number(n):
    return n << 1


# Example usage
print(halve_number(8))  # Output: 4
print(halve_number(17))  # Output: 7

print(double_number(8))  # Output: 16
print(double_number(17))  # Output: 34


def swap(a, b):
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return a, b


def count_ones(n):
    count = 0
    while n:
        count += n & 1
        n = n >> 1
    return count


def find_single(arr):
    result = 0
    for num in arr:
        result ^= num
    return result


# Example usage
print(find_single([2, 3, 5, 4, 5, 3, 4]))  # 2
