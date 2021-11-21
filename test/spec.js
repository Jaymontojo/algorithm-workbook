const { expect } = require("chai");
const MaxHeap = require("../heaps/MaxHeap");
const MinHeap = require("../heaps/MinHeap");

describe("Max Heaps", () => {
  let maxHeap;
  beforeEach(()=>{
    maxHeap = new MaxHeap([1,2,3,4]);
  });

  describe("The Max Heap Constructor", () => {
   it("should be a function", () => {
     expect(MaxHeap).to.be.a("function");
   });

   it("should have a property named heapedArray", () => {
     expect(maxHeap.heapedArray).to.exist;
   });
  });
});