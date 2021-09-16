'use strict';

describe('Counter', () => {
  let counter;

  beforeEach(() => {
    counter = new Counter();
  })

  it('goes up by 1', () => {
    counter.increment();
    expect(counter.getCount()).toEqual(1)
  });
  
});