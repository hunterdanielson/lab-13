const { promiseCheck } = require('../lib/promiseCheck');

describe('promise checker', () => {
  it('returns true if something is a promise', () => {

    const myPromise = new Promise(() => {});
   
    expect(promiseCheck(myPromise)).toBeTruthy();
  });

  it('returns false if something is not a promise', () => {
    expect(promiseCheck(1)).toBeFalsy();
  });
});
