/** Class representing a Hash Table */

class HashTable {
    constructor() {
      this._storage = new Array(25).fill(0);
      this._tableSize = 25 //For Hashing
    }
    /*
    * Inserts a new key-value pair
    * @param {string} key - the key associated with the value
    * @param {*} value - the value to insert
    */
    insert(key,value) {
      const index = this._hash(key,this._tableSize)
      if (this._storage[index]) {
        const arr = this._storage[index]
        arr.push({key:key,value:value})
      } else {
        console.log(this._storage[index])
        this._storage[index] = [{key:key,value:value}]
      }
    }
    /*
    * Deletes a key-value pair
    * @param {string} key - the key associated with the value
    * @return {*} value - the deleted value
    */
    remove(key) {
      let index = this._hash(key,this._tableSize)
      if (this._storage[index].length > 1) {
        const arr = this._storage[index]
        for (const aIndex in arr) {
          const collisonObject = arr[aIndex]
          if (collisonObject["key"] === key) {
            arr.splice(aIndex, 1)
          }
        }
      } else {
        return this._storage.splice(index, 1);
      }
    }
    /*
    * Returns the value associated with a key
    * @param {string} key - the key to search for
    * @return {*} - the value associated with the key
    */
    retrieve(key) {
      const index = this._hash(key,this._tableSize)
      if (this._storage[index].length > 0) {
        const arr = this._storage[index]
        for (const collisonObject of arr) {
          if (collisonObject["key"] === key) {
            return collisonObject["value"]
          }
        }
      } else {
        return this._storage[index][0].value
      }
    }  
    /*
    * Hashes string value into an integer that can be mapped to an array index
    * @param {string} str - the string to be hashed
    * @param {number} n - the size of the storage array
    * @return {number} - an integer between 0 and n
    */
    _hash(str, n) {
      let sum = 0;
      for (let i = 0; i < str.length; i++)
          sum += str.charCodeAt(i) * 3
  
      return sum % n;
    }
  }
  
let hashTable = new HashTable()
hashTable.insert("one",12)
console.log(hashTable.retrieve("one"))