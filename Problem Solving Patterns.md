# LeetCode Patterns

1. Two Pointers
2. Sliding Windows
3. Binary Search (variation of two pointer)
4. Non Linear Structures Problems : tress & graphs
   1. BFS (Uses Queue: first in first out) Best for shortest path, exploring nodes layer by layer
   2. DFS (Uses Recursion and Stacks: Last in first out) Best for exploring all paths
5. Backtracking extension of DFS
   1. Prebuilt tree structure -> DFS
   2. Built it yourself; generated dynamically -> Backtracking
6. Priority Queue (Top K): Heap
   1. Min Heap
   2. Max Heap
7. Dynamic Programming
   1. Optimizing a solution by breaking down overlapping subproblem and reusing them to avoid redundant computation
   2. Tow Down (Backtracking + Memoization)
   3. Bottom Up

### 1. **Two Pointers**

- **Same Direction:** Useful for problems requiring a single pass, like detecting cycles in a linked list. Example: Finding the middle of a linked list using fast (two steps) and slow (one step) pointers.
- **Opposite Directions:** Common in problems where you need to compare elements from both ends, such as finding two numbers in a sorted array that add up to a target. One pointer starts at the beginning, the other at the end, and they move inward based on conditions.

### 2. **Sliding Window**

- Builds on the two-pointer approach, creating a “window” that expands or contracts as conditions are met.
- **Example:** Finding the maximum sum of any subarray of size `k` in an array. Adjust the window size dynamically by moving the start or end pointer as needed.

### 3. **Binary Search**

- A technique for finding a target in sorted data, narrowing down the search by half each time (O(log n) complexity).
- **Beyond Sorting:** Applicable to any monotonic sequence (e.g., finding the first occurrence of `true` in a sorted list of `true/false` values).
- **Example:** Locating a target in a rotated sorted array by checking halves iteratively.

### 4. **Breadth-First Search (BFS)**

- Explores nodes level-by-level, typically used for shortest path problems in graphs or finding the closest solution in a tree structure.
- **Example:** Finding the shortest path in an unweighted graph by visiting all neighbors before moving to the next level.

### 5. **Depth-First Search (DFS)**

- Explores paths or nodes deeply before backtracking, making it suitable for exploring all configurations or paths within a graph.
- **Example:** Traversing a binary tree to find all root-to-leaf paths or checking if a path exists in a maze.

### 6. **Backtracking**

- An extension of DFS, where decisions are made to explore possible solutions, and choices are reversed if they lead to a dead end.
- **Ideal for:** Problems with numerous combinations (e.g., permutations, subsets).
- **Example:** Solving a Sudoku puzzle by filling cells one by one and backtracking if a number doesn’t fit.

### 7. **Priority Queues/Heaps**

- A heap data structure that provides efficient retrieval of the minimum or maximum element.
- **Common Types:**
  - **Min Heap:** Used for finding the K largest values in a list.
  - **Max Heap:** Used for finding the K smallest values.
- **Example:** Finding the top K frequent elements in an array using a min-heap to store frequencies.

### 8. **Dynamic Programming (DP)**

- Optimizes recursive solutions by breaking problems into overlapping subproblems and storing results.
- **Two Approaches:**
  - **Top-Down (Memoization):** Solves main problems by recursively storing results of subproblems.
  - **Bottom-Up:** Fills a table starting with base cases, iteratively building up solutions.
- **Example:** Calculating the Fibonacci sequence with overlapping calculations stored in a table or memoized function for efficiency.
