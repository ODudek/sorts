class Sort {
  constructor (number) {
    this.n = number
    this.arrayNumbers = []
    this.bigNumber = this.n + 1
    this.smallNumber = 11
  }

  randomSmallNumbers () {
    for (let i = 0; i < this.n; i++) {
      const randomNumber = Math.floor(Math.random() * this.smallNumber)
      this.arrayNumbers.push(randomNumber)
    }
  }
  randomBigNumbers () {
    for (let i = 0; i < this.n; i++) {
      const randomNumber = Math.floor(Math.random() * this.bigNumber)
      this.arrayNumbers.push(randomNumber)
    }
  }

  sortToHighest (array) {
    array.sort(function (a, b) {
      return a - b
    })
  }

  sortToLowest (array) {
    array.sort(function (a, b) {
      return b - a
    })
  }

  swap (array, x, y) {
    let b = array[x]
    array[x] = array[y]
    array[y] = b
    return array
  }

  timeMeasurement (sortFunction) {
    let start = new Date()
    sortFunction()
    let end = (new Date() - start) / 1000
    console.log(`Execution time of Insert Sort: ${end}s`)
  }
}

module.exports = Sort
