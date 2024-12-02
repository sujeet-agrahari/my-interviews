def minimumBribes(q):
    bribes = {}
    for i in range(len(q) - 1):
        if q[i] != q[i+1] - 1 and q[i] > q[i+1]:
            if q[i] in bribes:
                bribes[q[i]] += 1
            else:
                bribes[q[i]] = 1
            q[i], q[i+1] = q[i+1], q[i]
            
    num_of_persons = len(bribes.keys())
    is_chaotic = max(bribes.values()) > 2
    return num_of_persons, is_chaotic


print(minimumBribes([2, 5, 1, 3, 4]))