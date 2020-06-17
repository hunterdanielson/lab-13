const { transformFile } = require('../lib/transform');
const fsPromise = require('fs').promises;

describe('transform function', () => {
  beforeAll(() => {
    return fsPromise.writeFile('./test-file.txt', 'This is A TESTING file.');
  });
  afterAll(() => {
    return fsPromise.unlink('./test-file.txt');
  });
  it('transforms a file according to instructions', () => {
    return transformFile('./test-file.txt')
      .then(contents => {
        expect(contents).toEqual('GNITSETAT');
      });
  });
});
