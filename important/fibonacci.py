def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


# what is fibonacci?
# Fibonacci is a sequence of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.
# The sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.
