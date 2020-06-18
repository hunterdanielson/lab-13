const { getCharacter } = require('../lib/getCharacter');

jest.mock('superagent', () => ({
  get: () => {
    return Promise.resolve({
      body: {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human'
      }
    });
  }
}));

describe('rick and morty api functions', () => {
  it('can get by character id', () => {
    return getCharacter(1)
      .then(response => {
        expect(response).toEqual({ 'name': 'Rick Sanchez', 'species': 'Human', 'status': 'Alive' });
      });
  });
});
