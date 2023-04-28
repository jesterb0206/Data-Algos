// Graphs

// Objectives

// • Explain what a graph is
// • Compare and contrast different types of
//   graphs and their use cases in the real world
// • Implement a graph using an adjacency list
// • Traverse through a graph using BFS and DFS
// • Compare and contrast graph traversal
//   algorithms

// What are Graphs?

// A graph data structure consists of
// a finite (and possibly mutable) set
// of vertices or nodes or points,
// together with a set of unordered
// pairs of these vertices for an
// undirected graph or a set of
// ordered pairs for a directed graph.

// Uses for Graphs

// • Social Networks
// • Location / Mapping
// • Routing Algorithms
// • Visual Hierarchy
// • File System Optimizations
// • EVERYWHERE!

// Recommendations

// • "People also watched"
// • "You might also like ..."
// • "People you might know"
// • "Frequently bought with"

// Types of Graphs

// Essential Graph Terms

// • Vertex - a node
// • Edge - connection between nodes
// • Weighted / Unweighted - values assigned to distances
//   between vertices
// • Directed / Undirected - directions assigned to distanced
//   between vertices

// Differences & Big O

// |V| - number of vertices
// |E| - number of edges

// Add Vertex
// Adjacency List - O(1)
// Adjacency Matrix - O(|v²|)

// Add Edge
// Adjacency List - O(1)
// Adjacency Matrix - O(1)

// Remove Vertex
// Adjacency List - O(|V| + |E|)
// Adjacency Matrix - O(|v²|)

// Remove Edge
// Adjacency List - O(|E|)
// Adjacency Matrix - O(1)

// Query
// Adjacency List - O(|V| + |E|)
// Adjacency Matrix - O(1)

// Storage
// Adjacency List - O(|V| + |E|)
// Adjacency Matrix - O(|v²|)

// Adjacency List

// • Can take up less
//   space (in sparse
//   graphs)
// • Faster to iterate
//   over all edges
// • Can be slower to
//   lookup specific
//   edge

// Adjacency Matrix

// • Takes up more
//   space (in sparse
//   graphs)
// • Slower to iterate
//   over all edges
// • Faster to lookup
//   specific edge

// What will we use?

// An Adjacency List

// Why?

// Most data in the real-world tends to lend
// itself to sparser and / or larger graphs.

// Adding a Vertex

// • Write a method called addVertex, which
//   accepts a name of a vertex
// • It should add a key to the adjacency list
//   with the name of the vertex and set its
//   value to be an empty array

// Adding an Edge

// • This function should accept two vertices,
//   we can call them vertex1 and vertex2
// • The function should find in the adjacency
//   list the key of vertex1 and push vertex2 to
//   the array
// • The function should find in the adjacency
//   list the key of vertex2 and push vertex1 to
//   the array
// • Don't worry about handling errors / invalid
//   vertices

// Removing an Edge

// • This function should accept two vertices, we'll
//   call them vertex1 and vertex2
// • The function should reassign the key of vertex1
//   to be an array that does not contain vertex2
// • The function should reassign the key of vertex2
//   to be an array that does not contain vertex1
// • Don't worry about handling errors / invalid
//   vertices

// Removing a Vertex

// • The function should accept a vertex to remove
// • The function should loop as long as there are any
//   other vertices in the adjacency list for that vertex
// • Inside of the loop, call our removeEdge function with
//   the vertex we are removing and any values in the
//   adjacency list for that vertex
// • Delete the key in the adjacency list for that vertex

// Our Graph Class

// We are building an Undirected Graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
