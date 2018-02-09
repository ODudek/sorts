// const swap = require('../swap');


class SelectSort {
    constructor(numbers) {
        this.n = numbers;
        this.bigRand = this.n + 1;
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
        for (let i = 0; i < this.n - 1; i++) {
            let min = i;
            for (let j = i + 1; j < this.n; j++) {
                if (array[j] < array[min]) {
                    min = j;
                }
            }
            if (min !== i) {
                array.swap(i, min);
            }
        }
    }
}

var array = [];
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
 *  Funkcja wypełniająca tablice losowymi liczbami
 * @param array
 */
function fillArray(array) {
    for (var i = 0; i < 30; i++) {
        var randomNumber = Math.floor(Math.random() * 30) + 1; // "+ 1" aby losowało z zakresu <1, 30>
        array.push(randomNumber);
    }
}

/**
 * Funkcja sortowania przez wybieranie
 * @param array
 */
function selectionSort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            array.swap(i, min);
        }
    }
}

function setup() {
    fillArray(array);
    selectionSort(array);
    console.log(array);
}

setup(); // Uruchomienie wypełnienia tablicy losowymi liczbami oraz posortowanie ich
