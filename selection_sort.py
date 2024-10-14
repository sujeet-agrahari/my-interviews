def selection_sort(list):
  for i in range(1, len(list)):
    for j in range(i, len(list)):
      if list[j] < list[i - 1]:
        temp = list[i-1]
        list[i-1] = list[j]
        list[j] = temp
  return list

# print(selection_sort([2, 5, 1, 0, -1]))
 
def selection_sort_2(list):
  for i in range(1, len(list)):
    key = list[i]
    j = i - 1
    while j >= 0 and list[j] > key:
      list[j+1] = list[j]
      j = j -1
    list[j+1]  = key
  return list

print(selection_sort_2([5, 2, 4, 6, 1]))