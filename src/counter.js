'use strict';

class Counter {
  constructor() {
    this.count = 0;
  }

  getCount() {
    return this.count;
  }

  increment(){
    return this.count += 1
  }

  decrement(){
    return this.count -= 1
  }
}