// Dijkstra's Algorithm

// Objectives

// • Understand the importance of Dijkstra's
// • Implement a Weighted Graph
// • Walk through the steps of Dijkstra's
// • Implement Dijkstra's using a naive
//   priority queue
// • Implement Dijkstra's using a binary heap
//   priority queue

// What Is It

// One of the most famous and widely used
// algorithms around!

// Finds the shortest path between two
// vertices on a graph

// "What's the fastest way to get from point A
// to point B?"

// Who Was He?

// Edsger Dijkstra was a Dutch programmer,
// physicist, essayist, and all around smarty-pants

// He helped to advance the field of computer
// science from an "art" to an academic discipline

// Many of his discoveries and algorithms are still
// commonly used to this day

// Why Is It Useful?

// • GPS - finding fastest route
// • Network Routing - finds open shortest
//   path for data
// • Biology - used to model the spread of
//   viruses among humans
// • Airline tickets - finding cheapest route
//   to your destination
// • Many other uses

// Now on to Dijkstra's

// The Approach

// 1. Every time we look to visit a new node, we
//    pick the node with the smallest known
//    distance to visit first.
// 2. Once we've moved to the node we're
//    going to visit, we look at each of its
//    neighbors
// 3. For each neighboring node, we calculate
//    the distance by summing the total edges
//    that lead to the node we're checking from
//    the starting node.
// 4. If the new total distance to a node is less
//    than the previous total, we store the new
//    shorter distance for that node.

// Dijkstra's Pseudocode

// • This function should accept a starting and ending vertex
// • Create an object (we'll call it distances) and set each key to be every vertex in
//   the adjacency list with a value of infinity, except for the starting vertex which
//   should have a value of 0
// • After setting a value in the distances object, add each vertex with a priority of
//   Infinity to the priority queue, except the starting vertex, which should have a
//   priority of 0 because that's where we begin
// • Create another object called previous and set each key to be every vertex in
//   the adjacency list with a value of null
// • Start looping as long as there is anything in the priority queue
//   • Dequeue a vertex from the priority queue
//   • If that vertex is the same as the ending vertex we are done!
//   • Otherwise loop through each value in the adjacency list at that vertex
//     • Calculate the distance to that vertex from the starting vertex
//     • If the distance is less than what is currently stored in our distances
//       object
//       • Update the distances object with new lower distance
//       • Update the previous object to contain that vertex
//       • Enqueue the vertex with the distance from the start node

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

var graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.Dijkstra('A', 'E');
