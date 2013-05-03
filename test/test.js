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

  it('builds a hash', function () {
    var builder = new HashBuilder()
    builder.add('foo')
    builder.digest().should.equal('738c9adf')
  })

  it('hashes ordered arrays', function () {
    var a1 = [1,2,3]
    var a2 = [1,2,3]
    var a3 = [1,3,2]

    var builder1 = new HashBuilder()
    builder1.ordered(a1)
    var builder2 = new HashBuilder()
    builder2.ordered(a2)
    var builder3 = new HashBuilder()
    builder3.ordered(a3)

    builder1.digest().should.equal('77b79c2e')

    builder1.digest().should.equal(builder2.digest())
    builder1.digest().should.not.equal(builder3.digest())

  })


  it('hashes unordered arrays', function () {
    var a1 = [1,2,3]
    var a2 = [1,2,3]
    var a3 = [1,3,2]

    var builder1 = new HashBuilder()
    builder1.unordered(a1)
    var builder2 = new HashBuilder()
    builder2.unordered(a2)
    var builder3 = new HashBuilder()
    builder3.unordered(a3)

    builder1.digest().should.equal('b2420df')

    builder1.digest().should.equal(builder2.digest())
    builder1.digest().should.equal(builder3.digest())

  })


})