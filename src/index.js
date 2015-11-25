var map = require('./map')

module.exports = function(string) {

  for (var key in map) {
    string = string.replace(new RegExp(key, 'g'), map[key])
  }

  return string
}