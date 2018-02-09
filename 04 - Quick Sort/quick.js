const swap = require('../swap');

class QuickSort {
    constructor(numbers) {
        this.n = numbers;
        this.bigRand = (this.n + 1) * 10;
        this.smallRand = 11;
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
    
    sort(array, firstElement, lastElement) {
        let pivot;
        let partitionIndex;
        
        
        if (firstElement < lastElement) {
            pivot = lastElement;
            partitionIndex = this.partition(array, pivot, firstElement, lastElement);
            
            this.sort(array, firstElement, partitionIndex - 1);
            this.sort(array, partitionIndex + 1, lastElement);
        }
        return array;
    }
    
    partition(array, pivot, left, right) {
        let pivotValue = array[pivot],
            partitionIndex = left;
        
        for (let i = left; i < right; i++) {
            if (array[i] < pivotValue) {
                array.swap(i, partitionIndex);
                partitionIndex++;
            }
        }
        array.swap(right, partitionIndex);
        return partitionIndex;
    }
}

new QuickSort(100000);
// module.exports = QuickSort;
