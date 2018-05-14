const {Person} = require('./person');

/**
 * @param name
 * @return {Person}
 */
function getPerson(name) {
  return new Person(name);
}

module.exports = {
  getPerson
};