'use strict';

describe('Counter', () => {
  let counter;

  beforeEach(() => {
    counter = new Counter();
  })
  
  it('goes up by 1', () => {
    expect(counter.increment()).toEqual(1)
  });

});