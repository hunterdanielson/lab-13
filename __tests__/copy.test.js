const { copyFile } = require('../lib/copy');
const fsPromise = require('fs').promises;

describe('copy function', () => {
  afterAll(() => {
    return fsPromise.unlink('./copy.md');
  });
  it('copies one file contents to another', () => {
    return copyFile('./README.md', './copy.md')
      .then(() => {
        return fsPromise.readFile('./copy.md', { encoding: 'utf-8' });
      })
      .then(contents => {
        expect(contents).toEqual('# lab-13\n');
      });
  });
});
