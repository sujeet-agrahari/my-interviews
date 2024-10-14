import math

def gcd(a, b):
  if a < b:
    min = a
    max = b
  else:
    min = b
    max = a
  while max % min != 0:
    r = max % min
    temp = min
    min = r
    max = temp
  return min

print(gcd(-4, 9))