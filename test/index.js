var expect = require('chai').expect
var converter = require('../src/index.js')

describe('convert to unicode', function() {
  it('it should convert unicode compound to unicode', function() {
    var string = 'Tôi là người Việt Nam'
    var result = 'Tôi là người Việt Nam'

    expect(converter(string)).to.equal(result)
  })
})
