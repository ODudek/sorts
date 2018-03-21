const Sort = require('../sort')

class Insert extends Sort {
  constructor (number) {
    super(number)
    this.randomBigNumbers()
    this.sort(this.arrayNumbers, this.n)
  }

  sort (array, n) {
    for (var i = 1; i < n; i++) {
      var key = array[i]
      var j = i - 1
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j]
        j = j - 1
      }
      j++
      array[j] = key
    }
  }
}

module.exports = Insert
