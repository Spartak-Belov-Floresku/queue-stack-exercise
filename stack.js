/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val      = val;
    this.next     = null;
    this.previous = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first    = null;
    this.last     = null;
    this.size     = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if(!this.first){
      this.first         = newNode;
      this.last          = newNode;
      this.first.next    = newNode;
      this.last.previous = newNode; 
    }else{
      this.first.previous = newNode;
      newNode.next        = this.first;
      this.first          = newNode;
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let val;
    try{

      if(!this.first){
        throw 'empty';
      }else if(this.size===1){
        val        = this.first.val;
        this.first =  null;
        this.last  =  null;
      }else{
        val            = this.first.val;
        this.first     = this.first.next;
      }

      this.size--;
      return val;

    }catch(err){
      throw Error(err);
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    let val;
    if(!this.first)
      val = null
    else
      val = this.first.val;
    return val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !this.size? true: false;
  }
}

module.exports = Stack;
