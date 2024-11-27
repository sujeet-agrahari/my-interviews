// q: what is a priority queue?
// a: a priority queue is a data structure that stores elements in a queue and assigns a priority to each element.
// The element with the highest priority is removed first. 
// If two elements have the same priority, they are removed in the order they were added.

// q: what is a heap
// a: a heap is a binary tree that satisfies the heap property.
// The heap property states that a parent node must have a higher priority than its children.
// when a node is added to a heap, it is placed in the next available position in the bottom level of the tree.
// The node is then moved up the tree until it is in the correct position.

class Heap {
  constructor() {
    this.collection = [];
  }

  // Inserts an element into the heap and maintains the heap property
  insert(element) {
    this.collection.push(element);
    this.bubbleUp(this.collection.length - 1);
  }

  // Moves the element at the given index up to its correct position
  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.collection[index], this.collection[parentIndex]) < 0) {
        [this.collection[index], this.collection[parentIndex]] = [this.collection[parentIndex], this.collection[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Removes and returns the minimum element from the heap
  extractMin() {
    if (this.isEmpty()) return null;
    const min = this.collection[0];
    const end = this.collection.pop();
    if (this.collection.length > 0) {
      this.collection[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  // Moves the element at the given index down to its correct position
  sinkDown(index) {
    const length = this.collection.length;
    const element = this.collection[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.collection[leftChildIndex];
        if (this.compare(leftChild, element) < 0) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.collection[rightChildIndex];
        if (
          (swap === null && this.compare(rightChild, element) < 0) ||
          (swap !== null && this.compare(rightChild, leftChild) < 0)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.collection[index] = this.collection[swap];
      this.collection[swap] = element;
      index = swap;
    }
  }

  // Compares two elements based on their priority
  compare(a, b) {
    return a.priority - b.priority;
  }

  // Checks if the heap is empty
  isEmpty() {
    return this.collection.length === 0;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = new Heap();
  }

  // Adds an element with a given priority to the priority queue
  enqueue(element, priority) {
    this.heap.insert({ element, priority });
  }

  // Removes and returns the element with the highest priority
  dequeue() {
    const min = this.heap.extractMin();
    return min ? min.element : null;
  }

  // Checks if the priority queue is empty
  isEmpty() {
    return this.heap.isEmpty();
  }
}

class PatientQueue {
  constructor() {
    this.priorityQueue = new PriorityQueue();
    this.priorityMap = {
      "critical": 1,
      "high-injury": 2,
      "minor-injury": 3,
      "normal": 4
    };
  }

  // Adds a patient to the queue with the appropriate priority
  enqueue(patient) {
    const priority = this.priorityMap[patient[1]];
    this.priorityQueue.enqueue(patient[0], priority);
  }

  // Removes and returns the patient with the highest priority
  dequeue() {
    return this.priorityQueue.dequeue();
  }

  // Checks if the patient queue is empty
  isEmpty() {
    return this.priorityQueue.isEmpty();
  }
}

// Example usage
let pq = new PatientQueue();
pq.enqueue(["John Doe", "normal"]);
pq.enqueue(["Jane Smith", "high-injury"]);
pq.enqueue(["Alice Johnson", "critical"]);
pq.enqueue(["Bob Brown", "minor-injury"]);
pq.enqueue(["Sam Wilson", "normal"]);
console.log(pq.dequeue()); // Alice Johnson