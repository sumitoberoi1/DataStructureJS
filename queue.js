/** Class representing a Queue. 
 * @constructor
*/

class Queue {

    constructor() {
      this._storage = {};
      this._length = 0
      this._head = 0
    }
    /*
    * Enqueues a new value at the end of the queue
    * @param {*} value the value to enqueue
    */
    enqueue(element) {
      this._storage[this._length+this._head] = element
      this._length += 1
    }
  
    /*
    * Dequeues the value from the beginning of the queue and returns it
    * @return {*} the first and oldest value in the queue
    */
    dequeue() {
      let val = this._storage[this._head]
      delete this._storage[this._head]
      this._head += 1
      this._length -= 1
      return val
    }
    /*
    * Returns the value at the beginning of the queue without removing it from the queue
    * @return {*} the first and oldest value in the queue
    */
    peek() {
      return this._storage[this._head]
    }
  }
  
  let queue = new Queue()
  queue.enqueue(23)
  queue.enqueue(12)
  queue.enqueue(3)
  queue.dequeue()
  console.log(queue)
  queue.enqueue(4)
  console.log(queue)