const { copyFileAsync } = require('../lib/promises');
const fsPromise = require('fs').promises;

describe('copy function', () => {
  afterAll(() => {
    return fsPromise.unlink('./copy.md');
  });
  it('copies one file contents to another', async() => {
    await copyFileAsync('./README.md', './copy.md');
    const expected = await fsPromise.readFile('./copy.md', { encoding: 'utf-8' });
    expect(expected).toEqual('# lab-13\n');
  });
});
