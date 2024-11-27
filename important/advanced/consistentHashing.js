// q: what is consistent hashing?
// a: consistent hashing is a technique used to distribute data across multiple servers in a way that minimizes reorganization when servers are added or removed.
// q: how does consistent hashing work?
// a: consistent hashing works by mapping data to a hash value in a way that is consistent across servers.

class ConsistentHashing {
  constructor() {
    this.ring = new Map(); // Stores the hash values and corresponding servers
    this.sortedKeys = []; // Stores the sorted hash values
  }

  _hash(key) {
    // Simple hash function for demonstration purposes
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) % 1000000007;
    }
    return hash;
  }

  addServer(server) {
    const hash = this._hash(server); // Compute the hash for the server
    this.ring.set(hash, server); // Add the server to the ring
    this.sortedKeys.push(hash); // Add the hash to the sorted keys
    this.sortedKeys.sort((a, b) => a - b); // Sort the keys
  }

  removeServer(server) {
    const hash = this._hash(server); // Compute the hash for the server
    this.ring.delete(hash); // Remove the server from the ring
    this.sortedKeys = this.sortedKeys.filter(key => key !== hash); // Remove the hash from the sorted keys
  }

  getServer(key) {
    if (this.ring.size === 0) {
      return null; // Return null if no servers are available
    }
    const hash = this._hash(key); // Compute the hash for the key
    for (let i = 0; i < this.sortedKeys.length; i++) {
      if (hash <= this.sortedKeys[i]) {
        return this.ring.get(this.sortedKeys[i]); // Return the server responsible for the key
      }
    }
    return this.ring.get(this.sortedKeys[0]); // Return the first server if no suitable server is found
  }
}

// Example usage:
const ch = new ConsistentHashing();
ch.addServer('server1');
ch.addServer('server2');
ch.addServer('server3');
console.log(ch.getServer('myData')); // Should print the server responsible for 'myData'