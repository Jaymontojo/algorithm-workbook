class MaxHeap {
  constructor(unsortedArr) {
    this.heap = buildMaxHeap(unsortedArr);
  }
  buildMaxHeap(arr){
    //IMPLEMENT
  }

  findRoot(){
    //IMPLEMENT
  }

  insert(value) {
    //IMPLEMENT
  }

  remove(value) {
    //IMPLEMENT
  }

  heapify(){
    //IMPLEMENT
  }

  sort(){
    //IMPLEMENT
  }
}

class MinHeap {
  constructor(unsortedArr) {
    this.heap = buildMinHeap(unsortedArr);
  }
  buildMinHeap(arr){
    //IMPLEMENT
  }

  findRoot(){
    //IMPLEMENT
  }

  insert(value) {
    //IMPLEMENT
  }

  remove(value) {
    //IMPLEMENT
  }

  heapify(){
    //IMPLEMENT
  }

  sort(){
    //IMPLEMENT
  }
}

module.exports = { MinHeap, MaxHeap };