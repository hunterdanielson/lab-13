const { getCharacter, getManyCharacters } = require('../lib/getCharacter');

describe('get character function', () => {
  it('gets a character by id', () => {
    return getCharacter(3)
      .then(response => {
        expect(response).toEqual({ 'name': 'Summer Smith', 'species': 'Human', 'status': 'Alive' });
      });
  });

  it('gets many characters with an array of ids', () => {
    return getManyCharacters([1, 2, 3])
      .then(response => {
        expect(response).toEqual([{ 'name': 'Rick Sanchez', 'species': 'Human', 'status': 'Alive' }, { 'name': 'Morty Smith', 'species': 'Human', 'status': 'Alive' }, { 'name': 'Summer Smith', 'species': 'Human', 'status': 'Alive' }]);
      });
  });
});
