const Sort = require('../sort')

class Bubble extends Sort {
  constructor (number) {
    super(number)
    this.randomBigNumbers()
    this.sortToHighest(this.arrayNumbers)   
    this.sort(this.arrayNumbers)
  }

  sort (array) {
    do {
      for (let i = 0; i < this.n - 1; i++) {
        if (array[i] > array[i + 1]) {
          this.swap(array, i, i + 1)
        }
      }
      this.n = this.n - 1
    }
    while (this.n > 1)
  }
}

module.exports = Bubble
