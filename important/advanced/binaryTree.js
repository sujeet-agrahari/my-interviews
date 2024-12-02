/**
 * A tree is a hierarchical data structure consisting of nodes, with a single node as the root from which all other nodes descend.
 * Each node contains a value and references to its child nodes.
 * 
 * A binary tree is a type of tree where each node has at most two children, referred to as the left child and the right child.
 * 
 * Properties of a binary tree:
 * - The maximum number of nodes at level 'l' is 2^l.
 * - The maximum number of nodes in a binary tree of height 'h' is 2^h - 1.
 * - In a binary tree with 'n' nodes, the minimum possible height or minimum number of levels is log2(n+1).
 * - A binary tree with 'L' leaves has at least log2(L+1) + 1 levels.
 * 
 * Types of binary trees:
 * - Full Binary Tree: Every node has 0 or 2 children.
 * - Complete Binary Tree: All levels are completely filled except possibly the last level, and the last level has all keys as left as possible.
 * - Perfect Binary Tree: All internal nodes have two children and all leaves are at the same level.
 * - Balanced Binary Tree: The height of the tree is O(log n) where 'n' is the number of nodes.
 * - Degenerate (or pathological) Tree: Each parent node has only one child.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a node in the binary tree
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    // If the new value is less than the node value, move left
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        // Recursively insert the new value
        this._insertNode(node.left, newNode);
      }
    } else {
      // If the new value is greater than the node value, move right
      if (node.right === null) {
        node.right = newNode;
      } else {
        // Recursively insert the new value
        this._insertNode(node.right, newNode);
      }
    }
  }

  // In-order traversal
  inOrder(node, callback) {
    if (node !== null) {
      this.inOrder(node.left, callback);
      callback(node.value);
      this.inOrder(node.right, callback);
    }
  }

  // Pre-order traversal
  // In pre-order traversal, the root is visited first.
  // The nodes are recursively visited in this order: root, left, right.
  // The value is passed to the callback function before visiting the left and right nodes.
  preOrder(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.preOrder(node.left, callback);
      this.preOrder(node.right, callback);
    }
  }

  // Post-order traversal
  // In post-order traversal, the root is visited last.
  // The nodes are recursively visited in this order: left, right, root.
  // The value is passed to the callback function after visiting the left and right nodes.
  postOrder(node, callback) {
    if (node !== null) {
      this.postOrder(node.left, callback);
      this.postOrder(node.right, callback);
      callback(node.value);
    }
  }

  // Find a node with a given value
  find(value) {
    return this._findNode(this.root, value);
  }

  _findNode(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      return this._findNode(node.left, value);
    } else if (value > node.value) {
      return this._findNode(node.right, value);
    } else {
      return node;
    }
  }

  // Remove a node with a given value
  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (node === null) {
      return null;
    }
    // If the value to be deleted is less than the root's value, then it lies in the left subtree
    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      // If the value to be deleted is greater than the root's value, then it lies in the right subtree
      node.right = this._removeNode(node.right, value);
      return node;
    } else {
      // Node with only one child or no child
      // If the node has no child, then the node is removed and the parent node points to null
      // If the node has only one child, then the parent node points to the child node
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Node with two children: Get the inorder successor (smallest in the right subtree)
      node.value = this._minValueNode(node.right).value;
      node.right = this._removeNode(node.right, node.value);
      return node;
    }
  }

  _minValueNode(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }
}

// Example usage:
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

tree.inOrder(tree.root, value => console.log(value)); // 3, 5, 7, 10, 12, 15, 18
tree.preOrder(tree.root, value => console.log(value)); // 10, 5, 3, 7, 15, 12, 18
tree.postOrder(tree.root, value => console.log(value)); // 3, 7, 5, 12, 18, 15, 10

console.log(tree.find(7)); // TreeNode { value: 7, left: null, right: null }
tree.remove(10);
tree.inOrder(tree.root, value => console.log(value)); // 3, 5, 7, 12, 15, 18
