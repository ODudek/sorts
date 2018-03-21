const Sort = require('../sort')

class Quick extends Sort {
  constructor (number) {
    super(number)
    this.firstNumber = 0
    this.lastNumber = this.n - 1
    this.randomBigNumbers()
    this.sort(this.arrayNumbers, this.firstNumber, this.lastNumber)
  }

  sort (array, firstElement, lastElement) {
    let pivot
    let partitionIndex

    if (firstElement < lastElement) {
      pivot = lastElement
      partitionIndex = this.partition(array, pivot, firstElement, lastElement)

      this.sort(array, firstElement, partitionIndex - 1)
      this.sort(array, partitionIndex + 1, lastElement)
    }
    return array
  }

  partition (array, pivot, left, right) {
    let pivotValue = array[pivot],
      partitionIndex = left

    for (let i = left; i < right; i++) {
      if (array[i] < pivotValue) {
        this.swap(array, i, partitionIndex)
        partitionIndex++
      }
    }
    this.swap(array, right, partitionIndex)
    return partitionIndex
  }
}

module.exports = Quick
