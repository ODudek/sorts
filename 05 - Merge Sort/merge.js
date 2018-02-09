class MergeSort {
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
            let randomNumber = Math.floor(Math.random() * this.bigRand);
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
        return this.merger(array, 0, array.length);
    }
    
    merger(array, start, end) {
        if (Math.abs(end - start) <= 1) {
            return [];
        }
        let middle = Math.ceil((start + end) / 2);
        
        this.merger(array, start, middle);
        this.merger(array, middle, end);
        
        return this.merge(array, start, middle, end);
    }
    
    merge(array, start, middle, end) {
        let left = [],
            right = [],
            leftSize = middle - start,
            rightSize = end - middle,
            maxSize = Math.max(leftSize, rightSize),
            size = end - start,
            i;
        
        for (i = 0; i < maxSize; i += 1) {
            if (i < leftSize) {
                left[i] = array[start + i];
            }
            if (i < rightSize) {
                right[i] = array[middle + i];
            }
        }
        i = 0;
        while (i < size) {
            if (left.length && right.length) {
                if (left[0] >= right[0]) {
                    array[start + i] = right.shift();
                } else {
                    array[start + i] = left.shift();
                }
            } else if (left.length) {
                array[start + i] = left.shift();
            } else {
                array[start + i] = right.shift();
            }
            i += 1;
        }
        return array;
    }
}
new MergeSort(100000);
// module.exports = MergeSort;
