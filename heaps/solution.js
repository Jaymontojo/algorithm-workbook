class MaxHeap {
  constructor(unHeapedArray) {
    this.heapedArray = buildMaxHeap(unHeapedArray);
  }
  buildMaxHeap(arr){
    /* 
     should only run once
     should implement heapify
     should build a minheap
    */
  }

  findRoot(){
    return this.heapedArray[0];
  }

  insert(value) {
    //IMPLEMENT
  }

  remove(value) {
    //IMPLEMENT
  }

  heapify(array, arrLength, rootIndex){
    let largest = rootIndex;
    let leftChild = 2 * rootIndex + 1;
    let rightChild = 2 * rootIndex + 2;

    if(leftChild < arrLength && array[leftChild] > array[largest]){
      largest = leftChild;
    }

    if(rightChild < arrLength && array[rightChild] > largest) {
      largest = rightChild
    }

    if (largest != rootIndex){
      let tempCache = array[rootIndex];
      array[rootIndex] = array[largest];
      array[largest] = tempCache;

      this.heapify(array, n, largest)
    }
  }

  sort(){
    //IMPLEMENT
  }
}

class MinHeap {
  constructor(unHeapedArray) {
    this.heapedArray = buildMaxHeap(unHeapedArray);
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

  heapify(unHeapedArray, ){
    //IMPLEMENT
  }

  sort(){
    //IMPLEMENT
  }
}

module.exports = { MinHeap, MaxHeap };