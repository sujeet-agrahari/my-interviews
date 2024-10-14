infinity = float('inf')

graph = {}

graph['start'] = {}

graph['start']['a'] = 10

graph['a'] = {}
graph['a']['c'] = 20

graph['c'] = {}
graph['c']['d'] = 1
graph['c']['finish'] = 30

graph['d'] = {}
graph['d']['a'] = 1

graph['finish'] = {}

costs = {}
costs['a'] = 10
costs['c'] = infinity
costs['d'] = infinity
costs['finish'] = infinity

parents = {}
parents['a'] = 'start'
parents['d'] = None
parents['c'] = None
parents['finish'] = None

processed = []

def find_lowest_cost_node(costs):
  lowest_cost = infinity
  lowest_cost_node = None
  for node, cost in costs.items():
    if cost < lowest_cost and node not in processed:
      lowest_cost = cost
      lowest_cost_node = node
  return lowest_cost_node


node = find_lowest_cost_node(costs)

while node is not None:
  cost = costs[node]
  neighbors = graph[node]
  for n in neighbors.keys():
    new_cost = cost + neighbors[n]
    if costs[n] > new_cost:
      costs[n] = new_cost
      parents[n] = node
  processed.append(node)
  node = find_lowest_cost_node(costs)


print("Cost from the start to each node:")
print(costs)
