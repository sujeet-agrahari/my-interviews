def rotate_left(arr, n):
    for i in range(n):
        arr.append(arr.pop(0))
    return arr