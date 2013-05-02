var chai = require('chai')
chai.should()
chai.use(require('chai-interface'))

describe('hash-builder', function () {
  var HashBuilder = require('../')
  
  it('interface', function () {

    var builder = new HashBuilder()
    builder.should.have.interface({
      add: Function,
      unordered: Function,
      ordered: Function,
      digest: Function,
      reset: Function,
      end: Function
    })

  })
})