const swap = require('../swap');

class BubbleSort {
    constructor(numbers) {
        this.n = numbers;
        this.bigRand = (this.n + 1) * 10;
        this.smallRand = 10;
        this.arrayNumbers = [];
        this.randomNumbers();
        // this.sortToHighest(this.arrayNumbers);
        this.sortToLowest(this.arrayNumbers);
        let start = new Date();
        this.sort(this.arrayNumbers);
        let end = (new Date() - start) / 1000;
        console.log(`Execution time of Insert Sort: ${end}s`);
    }
    
    randomNumbers() {
        for (let i = 0; i < this.n; i++) {
            let randomNumber = Math.floor(Math.random() * this.smallRand);
            this.arrayNumbers.push(randomNumber);
        }
    }
    
    sortToHighest(array) {
        array.sort(function (a, b) {
            return a - b;
        })
    }
    
    sortToLowest(array) {
        array.sort(function (a, b) {
            return b - a;
        })
    }
    
    sort(array) {
        do {
            for (let i = 0; i < this.n - 1; i++) {
                if (array[i] > array[i + 1]) {
                    array.swap(i, i + 1);
                }
            }
            this.n = this.n - 1;
        }
        while (this.n > 1)
    }
}

var array = [553241, 52315, 3215, 213, 323, 213, 213, 21, 32, 432, 5436, 58, 65, 545, 3243, 1];
/**
 * Prototyp dla tablicy zamieniający kolejność dwóch indeksów tej tablicy
 * @param x
 * @param y
 * @returns {Array}
 */
Array.prototype.swap = function (x, y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
};

/**
 * Funkcja sortowania bąbelkowego
 * @param array
 */
function bubbleSort(array) {
    var arrayLength = array.length;
    do {
        for (let i = 0; i < arrayLength - 1; i++) {
            if (array[i] > array[i + 1]) {
                array.swap(i, i + 1);
            }
        }
        arrayLength = arrayLength - 1;
    }
    while (arrayLength > 1)
}

bubbleSort(array);
console.log(array);
