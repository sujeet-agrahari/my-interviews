### Bits

A bit (short for binary digit) is the smallest unit of data in a computer and can have a value of either 0 or 1. Bits are the fundamental building blocks of all digital data and are used to represent and store information in binary form.

### Bit Manipulation Techniques

Bit manipulation involves performing operations directly on bits. Here are some common bit manipulation techniques:

1. **Bitwise AND (`&`)**:

   - Used to clear specific bits.
   - Example: `a & b` results in a bit being set to 1 only if both corresponding bits of `a` and `b` are 1.

   ```python
   a = 0b1100  # 12 in binary
   b = 0b1010  # 10 in binary
   result = a & b  # 0b1000 (8 in decimal)
   ```

2. **Bitwise OR (`|`)**:

   - Used to set specific bits.
   - Example: `a | b` results in a bit being set to 1 if either corresponding bit of `a` or `b` is 1.

   ```python
   a = 0b1100  # 12 in binary
   b = 0b1010  # 10 in binary
   result = a | b  # 0b1110 (14 in decimal)
   ```

3. **Bitwise XOR (`^`)**:

   - Used to toggle specific bits.
   - Example: `a ^ b` results in a bit being set to 1 if the corresponding bits of `a` and `b` are different.

   ```python
   a = 0b1100  # 12 in binary
   b = 0b1010  # 10 in binary
   result = a ^ b  # 0b0110 (6 in decimal)
   ```

4. **Bitwise NOT (`~`)**:

   - Used to invert all bits.
   - Example: `~a` results in each bit of `a` being flipped (0 becomes 1 and 1 becomes 0).

   ```python
   a = 0b1100  # 12 in binary
   result = ~a  # 0b...11110011 (-13 in decimal, two's complement representation)
   ```

5. **Left Shift (`<<`)**:

   - Used to shift bits to the left, effectively multiplying the number by 2 for each shift position.
   - Example: `a << n` shifts the bits of `a` to the left by `n` positions.

   ```python
   a = 0b0011  # 3 in binary
   result = a << 2  # 0b1100 (12 in decimal)
   ```

6. **Right Shift (`>>`)**:

   - Used to shift bits to the right, effectively dividing the number by 2 for each shift position.
   - Example: `a >> n` shifts the bits of `a` to the right by `n` positions.

   ```python
   a = 0b1100  # 12 in binary
   result = a >> 2  # 0b0011 (3 in decimal)
   ```

### Practical Applications

- **Setting a Bit**:

  - To set the `k`-th bit of a number `n` to 1: `n | (1 << k)`

  ```python
  n = 0b1001  # 9 in binary
  k = 2
  result = n | (1 << k)  # 0b1101 (13 in decimal)
  ```

- **Clearing a Bit**:

  - To clear the `k`-th bit of a number `n`: `n & ~(1 << k)`

  ```python
  n = 0b1101  # 13 in binary
  k = 2
  result = n & ~(1 << k)  # 0b1001 (9 in decimal)
  ```

- **Toggling a Bit**:

  - To toggle the `k`-th bit of a number `n`: `n ^ (1 << k)`

  ```python
  n = 0b1001  # 9 in binary
  k = 2
  result = n ^ (1 << k)  # 0b1101 (13 in decimal)
  ```

- **Checking a Bit**:

  - To check if the `k`-th bit of a number `n` is set: `(n & (1 << k)) != 0`

  ```python
  n = 0b1001  # 9 in binary
  k = 3
  result = (n & (1 << k)) != 0  # True (bit is set)
  ```

Bit manipulation is a powerful tool in programming, especially in low-level programming, optimization, and solving algorithmic problems efficiently.

Bit manipulation techniques can be extremely useful in solving various data structure and algorithm-related problems. Here are some common scenarios where bit manipulation can be applied:

### 1. **Checking if a Number is Even or Odd**

- **Technique**: Use the bitwise AND operator.
- **Explanation**: The least significant bit (LSB) of an even number is 0, and for an odd number, it is 1.

```python
def is_even(n):
    return (n & 1) == 0

# Example usage
print(is_even(4))  # True
print(is_even(7))  # False
```

### 2. **Swapping Two Numbers Without a Temporary Variable**

- **Technique**: Use the XOR operator.
- **Explanation**: XORing the same number twice cancels out the number, effectively swapping the values.

```python
def swap(a, b):
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return a, b

# Example usage
a, b = 5, 9
a, b = swap(a, b)
print(a, b)  # 9, 5
```

### 3. **Counting the Number of 1s in a Binary Representation (Hamming Weight)**

- **Technique**: Use the bitwise AND operator and right shift.
- **Explanation**: Continuously check the LSB and shift right until the number becomes 0.

```python
def count_ones(n):
    count = 0
    while n:
        count += n & 1
        n >>= 1
    return count

# Example usage
print(count_ones(9))  # 2 (binary 1001)
```

### 4. **Finding the Only Non-Repeated Element in an Array**

- **Technique**: Use the XOR operator.
- **Explanation**: XORing all elements results in the non-repeated element because pairs cancel out.

```python
def find_single(arr):
    result = 0
    for num in arr:
        result ^= num
    return result

# Example usage
print(find_single([2, 3, 5, 4, 5, 3, 4]))  # 2
```

### 5. **Checking if a Number is a Power of Two**

- **Technique**: Use the bitwise AND operator.
- **Explanation**: A power of two has exactly one bit set. `n & (n - 1)` will be 0 if `n` is a power of two.

```python
def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

# Example usage
# Subtracting 1 from a power of two flips all the bits after the single set bit (e.g., 4 is 0100, 4 - 1 is 0011)
print(is_power_of_two(16))  # True
print(is_power_of_two(18))  # False
```

### 6. **Reversing Bits of a Number**

- **Technique**: Use bitwise operations to reverse the bits.
- **Explanation**: Continuously extract the LSB and shift it to the correct position in the result.

```python
def reverse_bits(n):
    result = 0
    for i in range(32):  # Assuming 32-bit integer
        result <<= 1
        result |= n & 1
        n >>= 1
    return result

# Example usage
print(bin(reverse_bits(0b00000010100101000001111010011100)))  # 0b00111001011110000010100101000000
```

### 7. **Finding the Missing Number in an Array**

- **Technique**: Use the XOR operator.
- **Explanation**: XOR all array elements and numbers from 1 to n. The result will be the missing number.

```python
def find_missing(arr):
    n = len(arr)
    xor_all = 0
    xor_arr = 0
    for i in range(1, n + 2):
        xor_all ^= i
    for num in arr:
        xor_arr ^= num
    return xor_all ^ xor_arr

# Example usage
print(find_missing([1, 2, 4, 5, 6]))  # 3
```

### Summary

Bit manipulation techniques are powerful tools that can optimize and simplify solutions to many problems in data structures and algorithms. They are particularly useful for:

- **Checking conditions** (e.g., even/odd, power of two)
- **Swapping values**
- **Counting bits**
- **Finding unique elements**
- **Reversing bits**
- **Finding missing elements**

Understanding and applying these techniques can lead to more efficient and elegant solutions.
