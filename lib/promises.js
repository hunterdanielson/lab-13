const fs = require('fs').promises;

const copyFileAsync = async(src, dst) => {
  const promiseFile = await fs.readFile(src, { encoding: 'utf-8' });
  return fs.writeFile(dst, promiseFile);
};

module.exports = {
  copyFileAsync
};
