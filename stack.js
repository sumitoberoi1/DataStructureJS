class Stack {

    constructor() {
      this._storage = {};
      this._length = 0
    }
    /*
    * Adds a new value at the end of the stack
    * @param {*} value the value to push
    */
    push(value) {
      this._storage[this._length] = value
      this._length += 1
    }
  
    /*
    * Removes the value at the end of the stack and returns it
    * @return {*} the last and newest value in the stack
    */
    pop() {
      let oldLength = this._length 
      if (this._length > 0) {
        this._length -= 1
        return delete this._storage[oldLength-1]
      }
    }
    /*
    * Returns the value at the end of the stack without removing it
    * @return {*} the last and newest value in the stack
    */
    peek() {
      return this._storage[this._length-1]
    }
  }
  
  const myStack = new Stack();
  myStack.push(1)
  myStack.push(2)
  myStack.push(3)
  myStack.pop()