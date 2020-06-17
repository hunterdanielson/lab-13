const fs = require('fs').promises;

const copyFile = (src, dst) => {
  const promiseFile = fs.readFile(src, { encoding: 'utf-8' });
  return promiseFile
    .then(contents => fs.writeFile(dst, contents));
};

module.exports = {
  copyFile
};
