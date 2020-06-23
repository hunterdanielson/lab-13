
const promiseCheck = (toCheck) => {
  
  return Promise.resolve(toCheck) == toCheck;
  // alternative promise check
  // return toCheck instanceof Promise;
};

module.exports = {
  promiseCheck
};
