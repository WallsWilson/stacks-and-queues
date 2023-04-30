/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let node = new Node(val);
    if (this.first === null) {
      this.first = node;
      this.last = node;
      } else {
        this.last.next = node;
        this.last = node;
        }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.first === null) {
      throw new Error("Queue is empty.");
      }
      let val = this.first.val;
      this.first = this.first.next;
      if (this.first === null) {
        this.last = null;
        }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.first === null) {
      throw new Error("Queue is empty.");
      }
      return this.first.val;
      }

  /** size(): return the number of nodes in the queue. */

  size() {
    return this.size;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.first === null;
    }
}

module.exports = Queue;
