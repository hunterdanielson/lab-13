const fs = require('fs').promises;

const transformFile = (src) => {
  const promiseFile = fs.readFile(src, { encoding: 'utf-8' });
  return promiseFile
    .then(contents => contents.replace(/[A-Z]/g, ''))
    .then(contents => contents.toUpperCase())
    .then(contents => contents.split('').reverse().join(''));
};

module.exports = {
  transformFile
};
