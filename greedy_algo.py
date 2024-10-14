states = set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'])



stations = {}
stations["kone"] = set(["id", "nv", "ut"])
stations["ktwo"] = set(["wa", "id", "mt"])
stations["kthree"] = set(["or", "nv", "ca"])
stations["kfour"] = set(["nv", "ut"])
stations["kfive"] = set(["ca", "az"])


def find_most_states_covering_station(states, stations):
  final_stations = set()
  while states:
    best_station = None
    states_covered = set()
    for station, station_states in stations.items():
      covered = states & station_states
      if len(covered) > len(states_covered) and station not in final_stations:
        best_station = station
        states_covered = covered
    if best_station is not None:
      states = states - states_covered
      final_stations.add(best_station)
      stations.pop(best_station)
    else:
      return None
  return final_stations

print(find_most_states_covering_station(states, stations))