const Sort = require('../sort')

class Merge extends Sort {
  constructor (number) {
    super(number)
    this.randomBigNumbers()
    this.sort(this.arrayNumbers)
  }

  sort (array) {
    return this.merger(array, 0, array.length)
  }

  merger (array, start, end) {
    if (Math.abs(end - start) <= 1) {
      return []
    }
    let middle = Math.ceil((start + end) / 2)

    this.merger(array, start, middle)
    this.merger(array, middle, end)

    return this.merge(array, start, middle, end)
  }

  merge (array, start, middle, end) {
    const leftSize = middle - start
    const rightSize = end - middle
    const maxSize = Math.max(leftSize, rightSize)
    const size = end - start
    let left = []
    let right = []
    let i

    for (i = 0; i < maxSize; i += 1) {
      if (i < leftSize) {
        left[i] = array[start + i]
      }
      if (i < rightSize) {
        right[i] = array[middle + i]
      }
    }
    i = 0
    while (i < size) {
      if (left.length && right.length) {
        if (left[0] >= right[0]) {
          array[start + i] = right.shift()
        } else {
          array[start + i] = left.shift()
        }
      } else if (left.length) {
        array[start + i] = left.shift()
      } else {
        array[start + i] = right.shift()
      }
      i += 1
    }
    return array
  }
}

module.exports = Merge
