const request = require('superagent');

const getCharacter = async(id) => {
  const character = await request.get(`https://rickandmortyapi.com/api/character/${id}`);
  const returnObject = {
    name: character.body.name,
    status: character.body.status,
    species: character.body.species
  };
  return returnObject;
};

const getManyCharacters = arrayOfIds => {
  const promises = [];
  arrayOfIds.forEach(id => promises.push(getCharacter(id)));
  return Promise.all(promises);
};

module.exports = {
  getCharacter,
  getManyCharacters
};
