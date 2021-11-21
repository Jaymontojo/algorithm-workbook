const { expect } = require("chai");
const MaxHeap = requier("./MaxHeap");
const MinHeap = requier("./MinHeap");

describe("Max Heaps", () => {
  let maxHeap;
  beforeEach(()=>{
    maxHeap = new MaxHeap()
  })

  describe("The Max Heap Constructor", () => {
   it("should be a function", () => {
     expect(maxHeap).to.be.a("function");
   })
   it("")
  })
});