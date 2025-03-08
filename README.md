# Technical Writing Assignment

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/fullstack-curriculum/how-tos/working-with-assignments#how-to-work-on-assignments).

## Prompt 1

Imagine you are giving a brief lesson on Recursion to a relatively new programmer. In your lesson make sure to include the following:

- A formal definition of recursion (feel free to quote an official source like MDN)
- An example in code.
- An explanation of the code example.
- An explanation of the kinds of functions that are best solved using recursion.

### Response 1

Recursion is a concept in programming where a fuction calls itself to solve smaller instances of the problem. It is typically used to solve problems that can be broken down into simpler, smaller subproblems, with the function continuing to call itself until it reaches a base case, which is the condition where the recursion stops.

```javascript
const recursiveFunction = (num) => {
  if (num <= 0) return num; // base case

  return recursiveFunction(num - 1); // recursive call
};
```

The function above takes a number argument `num` and counts down from that number until reaches 0 and returns. Now let's break down what is happening line by line inside of our `recursiveFunction `, In the first line we're setting up a base case to stop our recursion from entering into an infinite loop of recursive calls, Yes it's pretty bad!... In this example we're going to return `num` if num's value is 0, otherwise we're going to return a recursive call and pass it `num - 1` as an argument, at some point depending on num's value, `num` will be equal to 0 so we'll return `num` and exit function.

## Prompt 2

Imagine you are giving a brief lesson on the Tree data structure to a relatively new programmer. In your lesson make sure to include the following:

- A formal definition of a Tree (feel free to quote an official source like MDN)
- Definitions for key terms like **root**, **leaf**, **depth**, and **height** as they relate to Trees
- An example in code.
- An explanation of the code example.

### Response 2

A Tree is a widely used abstract data structure that simulates a hierarchical structure, where data is organized in nodes, each of which can have child nodes. According to the MDN Web Docs, a tree is "a nonlinear data structure that consists of nodes connected by edges."

**Root:** The topmost node in the tree, which has no parent. All other nodes are descendants of the root.
**Leaf:** A node that has no children (i.e., it is the end of a branch).
**Depth:** The length of the path from the root to a particular node. The root node has a depth of 0.
**Height:** The length of the longest path from a particular node to a leaf. The height of a tree is the height of its root node.

```javascript
// Node class represents each node of the tree
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // Add a child to the current node
  addChild(childNode) {
    this.children.push(childNode);
  }
}

// Example: Creating a Tree

// Create root node
const root = new TreeNode("Root");

// Create child nodes
const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");
const child3 = new TreeNode("Child 3");

// Add children to the root
root.addChild(child1);
root.addChild(child2);

// Add a child to one of the children
child1.addChild(child3);

// Traversing the tree (Depth First Search)
const traverseTree = (node) => {
  console.log(node.value);
  node.children.forEach((child) => traverseTree(child));
};

// Start traversal from the root
traverseTree(root);
```

We start by creating a root node (root) with the value "Root".
We then create child nodes (child1, child2, and child3) and use the addChild() method to connect them to their parent nodes. For example, child1 and child2 are added as children of the root node, and child3 is added as a child of child1.

The traverseTree function is a recursive function that starts from a given node and prints its value, then moves down to its children. It uses depth-first search (DFS), which explores as far down one branch of the tree as possible before backtracking.

## Prompt 3

Any iterative function can be written recursively. Provide an example of an iterative function and the same function written recursively. Then, explain the benefits and/or drawbacks of each approach.

### Response 3

**Iterative Function**

```javascript
// takes an array and a value and return value's index position in the array if it exists
const findByValue = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    // if value exists in array return current index
    if (array[i] === value) return i;
  }
  // if value is not found then it returns -1
  return -1;
};
```

**Recursive Function**

```javascript
// takes an array and a value and return value's index position in the array if it exists. Also has a parameter i that defaults to 0.
const findByValue = (array, value, i = 0) => {
  // if value exists in the array then return current index.
  if (array[i] === value) return i; //base case 1
  console.log(array[i]);
  // if i's value is equal to the length of array return -1
  if (i === array.length) return -1; //base case 2
  // recursive call
  return findByValue(array, value, i + 1);
};
```

Between these two cases for this type of problem we should go with the iterative approach. This is because Iteration uses a for loop, which is straightforward and typically more efficient in terms of performance. It doesn’t involve function calls and stack overhead and this is easy to understand, especially for developers who are more familiar with loops. It's clear in its flow, which can make debugging easier.

## Prompt 4

Depth-first-search is an algorithm of traversing through a tree that explores as far as possible along a single branch before backtracking and exploring other branches. The three approaches for depth-first-search are "inorder", "preorder", and "postorder".

Using this tree as an example, explain the differences between these three approaches, providing implementations of each (recursive or iterative, its up to you but one of them is definitely cleaner).

```

    A

/ \
 B C
/ \ \
D E F

```

### Response 4

A Tree is a structure where every item has a "parent" and "children," just like a family tree! The root is the starting point of the tree, and it can have branches (children) and leaves (the end points).

In this guide, we will talk about how to explore the tree step by step using three different ways: Preorder, Inorder, and Postorder. Think of them as three different ways to walk through a tree.

**Preorder Traversal (Root → Left → Right)**
In Preorder traversal, you visit the root first, then go to the left side of the tree, and finally explore the right side.

```javascript
const preorderTraversal = (node) => {
  if (!node) return;
  console.log(node.value); // Visit the root first
  preorderTraversal(node.left); // Visit the left side
  preorderTraversal(node.right); // Visit the right side
};
```

**Inorder Traversal (Left → Root → Right)**
In Inorder traversal, you explore the left side first, then the root, and finally the right side.

```javascript
const inorderTraversal = (node) => {
  if (!node) return;
  inorderTraversal(node.left); // Visit the left side
  console.log(node.value); // Visit the root
  inorderTraversal(node.right); // Visit the right side
};
```

**Postorder Traversal (Left → Right → Root)**
In Postorder traversal, you explore both the left side and right side first, then finally visit the root at the end.

```javascript
const postorderTraversal = (node) => {
  if (!node) return;
  postorderTraversal(node.left); // Visit the left side
  postorderTraversal(node.right); // Visit the right side
  console.log(node.value); // Visit the root last
};
```
