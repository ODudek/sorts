const Sort = require('../sort')

class Select extends Sort {
  constructor (number) {
    super(number)
    this.randomSmallNumbers()
    this.sort(this.arrayNumbers)
  }

  sort (array) {
    for (let i = 0; i < this.n - 1; i++) {
      let min = i
      for (let j = i + 1; j < this.n; j++) {
        if (array[j] < array[min]) {
          min = j
        }
      }
      if (min !== i) {
        this.swap(array, i, min)
      }
    }
  }

}

module.exports = Select
