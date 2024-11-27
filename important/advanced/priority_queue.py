import heapq

# q: What is priority queue?
# a: Priority queue is a data structure that stores elements in a queue and assigns a priority to each element.
# The element with the highest priority is served first.
# Priority queues are used in many algorithms like Dijkstra's algorithm, Prim's algorithm, etc.
# Python provides a built-in module heapq that provides the implementation of the priority queue.


class PriorityQueue:
    def __init__(self):
        self.heap = []

    def enqueue(self, element, priority):
        heapq.heappush(self.heap, (priority, element))

    def dequeue(self):
        if self.is_empty():
            return None
        return heapq.heappop(self.heap)[1]

    def is_empty(self):
        return len(self.heap) == 0


class PatientQueue:
    def __init__(self):
        self.priority_queue = PriorityQueue()
        self.priority_map = {
            "critical": 1,
            "high-injury": 2,
            "minor-injury": 3,
            "normal": 4,
        }

    def enqueue(self, patient):
        priority = self.priority_map[patient[1]]
        self.priority_queue.enqueue(patient[0], priority)

    def dequeue(self):
        return self.priority_queue.dequeue()

    def is_empty(self):
        return self.priority_queue.is_empty()


# Example usage
pq = PatientQueue()
pq.enqueue(["John Doe", "normal"])
pq.enqueue(["Jane Smith", "high-injury"])
pq.enqueue(["Alice Johnson", "critical"])
pq.enqueue(["Bob Brown", "minor-injury"])
pq.enqueue(["Sam Wilson", "normal"])
print(pq.dequeue())  # Alice Johnson
