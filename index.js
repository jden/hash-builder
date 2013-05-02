function HashBuilder(hash) {
  if (!(this instanceof HashBuilder)) {
    return new HashBuilder(hash)
  }

  this.hash = hash || crc32
  this.reset()
}
HashBuilder.prototype = {
  add: function (item) {
    this.val = this.val ^ this.hash(item)
    return this
  },
  unordered: function (arr) {
    console.log(this, typeof this)
    arr.forEach(this.add.bind(this))
    return this
  },
  ordered: function (arr) {
    return this.add(arr.join(''))
  },
  digest: function () {
    return (this.val < 0 ? -this.val : this.val).toString(16)
  },
  reset: function () {
    this.val = 0
    return this
  },
  end: function () {
    var d = this.digest()
    this.reset()
    return d
  }
}

module.exports = HashBuilder