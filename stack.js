/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let node = new Node(val);
    if (this.first === null) {
      this.first = node;
      this.last = node;
      } else {
        this.last.next = node;
        this.last = node;
        }
        this.size++;
        }

  /** pop(): remove and return the top value. Returns undefined. */

  pop() {
    if (this.first === null) {
      return undefined;
      }
      let val = this.first.val;
      this.first = this.first.next;
      this.size--;
      return val;
      }

  /** top(): return the top value. Returns undefined if stack is empty. */

  top() {
    if (this.first === null) {
      return undefined;
      }
      return this.first.val;
      }

  /** size(): return the number of values in the stack. */

  size() {
    return this.size;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.first === null) {
      throw new Error("Stack is empty");
      }
      let val = this.first.val;
      this.first = this.first.next;
      this.size--;
      return val;
      }

  /** top(): return the top value. Returns undefined if stack is empty. */

  top() {
    if (this.first === null) {
      return undefined;
      }
      return this.first.val;
      }

  /** push(val): add a new value to the top of the stack. */

  push(val) {
    let node = new Node(val);
    if (this.first === null) {
      this.first = node;
      this.last = node;
      }
      else {
        this.last.next = node;
        this.last = node;
        }
        this.size++;
        }

  /** isEmpty(): return true if the stack is empty. */

  isEmpty() {
    return this.first === null;
    }

  /** toString(): return a string representation of the stack. */

  toString() {
    let str = "";
    for (let node of this) {
      str += node.val + " ";
      }
      return str;
      }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.first === null) {
      return undefined;
      }
      return this.first.val;
      }

  /** pop(): remove the top value from the stack and return it. Returns undefined if stack is empty. */

  pop() {
    if (this.first === null) {
      return undefined;
      }
      let val = this.first.val;
      this.first = this.first.next;
      this.size--;
      return val;
      }

  /** push(val): add a new node with the given value to the top of the stack. */

  push(val) {
    this.add(new Node(val));
    } 
    

  /** add(node): add a new node to the top of the stack. */

  add(node) {
    if (this.first === null) {
      this.first = node;
      this.last = node;
      }
      else {
        this.last.next = node;
        this.last = node;
        }
        this.size++;
        }

  /** remove(node): remove a node from the stack. */

  remove(node) {
    if (this.first === node) {
      this.first = node.next;
      }
      else if (this.last === node) {
        this.last = node.prev;
        }
        else {
          node.prev.next = node.next;
          node.next.prev = node.prev;
          }
          this.size--;
          }

  /** size(): return the number of nodes in the stack. */

  size() {
    return this.size;
    }

  /** isEmpty(): return true if the stack is empty, false otherwise. */

  isEmpty() {
    return this.size === 0;
    }

  /** toString(): return a string representation of the stack. */

  toString() {
    let s = "";
    for (let node = this.first; node !== null; node = node.next) {
      s += node.toString() + "\n";
      }
      return s;
      }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
    }
  }

module.exports = Stack;
