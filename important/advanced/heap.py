import heapq

# q: What is a heap?
# a: A heap is a binary tree that satisfies the heap property.
# The heap property states that the key of the parent node is either always greater than or always less than the keys of its children.

# q: What is a min-heap?
# a: In a min-heap, the key of the parent node is always less than or equal to the keys of its children.

# q: What is a max-heap?
# a: In a max-heap, the key of the parent node is always greater than or equal to the keys of its children.

# q: What is the heap invariant?
# a: The heap invariant is the property of a heap that the key of the parent node is either always greater than or always less than the keys of its children.

# q: What is the time complexity of inserting an element into a heap?
# a: The time complexity of inserting an element into a heap is O(log n), where n is the number of elements in the heap.

# q: What is the time complexity of deleting an element from a heap?
# a: The time complexity of deleting an element from a heap is O(log n), where n is the number of elements in the heap.

# q: What is the time complexity of finding the minimum element in a min-heap?
# a: The time complexity of finding the minimum element in a min-heap is O(1).

# q: What is the time complexity of finding the maximum element in a max-heap?
# a: The time complexity of finding the maximum element in a max-heap is O(1).

# q: What is the time complexity of finding the kth smallest element in a min-heap?
# a: The time complexity of finding the kth smallest element in a min-heap is O(k log n), where n is the number of elements in the heap.

# q: What is the time complexity of finding the kth largest element in a max-heap?
# a: The time complexity of finding the kth largest element in a max-heap is O(k log n), where n is the number of elements in the heap.

# q: What is the time complexity of building a heap from an array of n elements?
# a: The time complexity of building a heap from an array of n elements is O(n).

heap_data = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0]

min_heap = []

# Building a min-heap
for i in heap_data:
    heapq.heappush(min_heap, i)

print(min_heap)  # [0, 1, 2, 6, 3, 5, 4, 7, 8, 9]

# building a max-heap
max_heap = []
for i in heap_data:
    heapq.heappush(max_heap, -i)

max_heap = [-i for i in max_heap]
print(max_heap)  # [9, 8, 5, 7, 6, 2, 4, 1, 3, 0]
