class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self, value=None) -> None:
        if value:
            self.head = Node(value)
            self.length = 1
        self.head = None
        self.length = 0

    @property
    def tail(self):
        if not self.head:
            return None
        current = self.head
        while current.next:
            current = current.next
        return current

    def is_empty(self):
        if self.head is None:
            return True
        return False

    def append(self, value):
        if not value:
            raise Exception("value is required")

        new_node = Node(value)
        self.length += 1
        if self.is_empty():
            self.head = new_node
            return self
        tail = self.tail
        tail.next = new_node
        return self

    def prepend(self, value):
        if not value:
            raise Exception("value is required")

        self.length += 1

        if self.head:
            new_node = Node(value)
            new_node.next = self.head
            self.head = new_node
            return self

        self.head = Node(value)
        return self

    def pop(self):
        if self.length == 0:
            raise Exception("List is already empty, can not remove item")

        current = self.head

        if self.length == 1:
            pop_node = current
            self.head = None
            self.length -= 1
            return pop_node
        while current.next.next:
            current = current.next

        pop_node = current.next
        current.next = None
        self.length -= 1
        return pop_node

    def pop_front(self):
        if self.length == 0:
            raise Exception("List is already empty, can not remove item")

        if self.length == 1:
            pop_node = self.head
            self.head = None
            self.length -= 1
            return pop_node

        pop_node = self.head
        self.head = pop_node.next
        self.length -= 1
        return pop_node

    def get(self, index):
        if index < 0:
            index = self.length + index  # Convert negative index to positive

        if index >= self.length:
            return None

        i = 0
        current = self.head
        while i < index and current:
            current = current.next
            i += 1
        return current

    def get_kth_from_end(self, index):
        slow = fast = self.head
        for _ in range(index):
            if not fast:
                return None
            fast = fast.next
        while fast:
            slow = slow.next
            fast = fast.next
        return slow

    def insert(self, index, value):
        if index < 0:
            index = self.length + index  # Convert negative index to positive

        if index > self.length:
            raise Exception(f"can't insert at position greater than {self.length}")

        new_node = Node(value)

        if index == 0:
            return self.prepend(new_node)

        pre_index_node = self.get(index - 1)

        if pre_index_node:
            new_node.next = pre_index_node.next
            pre_index_node.next = new_node
            self.length += 1
        return new_node

    def remove(self, index):
        if index < 0:
            index = self.length + index  # Convert negative index to positive

        if index >= self.length:
            raise Exception(f"can't remove from position greater than {self.length}")

        if index == 0:
            removed_node = self.head
            self.head = removed_node.next
            self.length -= 1
            return removed_node

        pre_index_node = self.get(index - 1)
        print(pre_index_node.__dict__)
        if pre_index_node:
            removed_node = pre_index_node.next
            pre_index_node.next = removed_node.next
            self.length -= 1
            return removed_node

    def set_value(self, index, value):
        node = self.get(index)
        if node:
            node.value = value
        return node

    def reverse(self):
        if not self.length:
            raise Exception("The list is empty")
        current = self.head.next
        prev = self.head
        self.head.next = None

        while current:
            self.head = current
            temp = current.next
            current.next = prev
            prev = current
            current = temp

    def get_mid(self):
        slow = self.head
        fast = self.head

        while fast is not None and fast.next is not None:
            slow = slow.next
            fast = fast.next.next
        return slow

    def has_loop(self):
        slow = self.head
        fast = self.head

        while fast is not None and fast.next is not None:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
            return False

    def remove_duplicates(self):
        values_set = set()

        values_set.add(self.head.value)
        current = self.head.next
        prev = self.head
        while current:
            if current.value in values_set:
                current = current.next
                prev.next = current
                self.length -= 1
            else:
                values_set.add(current.value)
                prev = current
                current = current.next
        return self

    def remove_from_m_to_n(self, m, n):
        if m == 0:
            self.head = self.head.next
            # Update head if removal starts from the beginning
        current = pre_m = self.head
        for i in range(n + 1):
            if i == m - 1:
                pre_m = current
            current = current.next

            if i == n:
                pre_m.next = current
        return self

    def print_list(self):
        current = self.head
        while current:
            print(current.value, end=" -> ")
            current = current.next
        print("None")
        return self


my_list = LinkedList()

print(my_list.head)
print(my_list.tail)
print(my_list.length)
print(my_list.is_empty())

my_list.append(5)

my_list.append(9)

my_list.append(10)
my_list.append(11)
my_list.append(12)
my_list.append(12)
my_list.append(11)


my_list.print_list()

my_list.remove_from_m_to_n(0, 5)

my_list.print_list()

# my_list.remove_duplicates().print_list()

# print(my_list.get_kth_from_end(4).__dict__)

# my_list.reverse()
# my_list.print_list()

# print(my_list.get_mid().__dict__)
# print(my_list.has_loop())

# my_list.pop_front()


# my_list.append(5)

# my_list.append(9)

# my_list.append(10)


# my_list.prepend(11)


# # my_list.pop()

# # my_list.pop_front()
# my_list.print_list()
# my_list.set_value(1, 99)


# my_list.print_list()

# print(my_list.length)
# print(my_list.length)

# my_list.print_list()

# my_list.reverse()

# my_list.print_list()

# my_list.pop()

# my_list.print_list()
