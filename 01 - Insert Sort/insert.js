class InsertSort {
    constructor(numbers) {
        this.n = numbers;
        this.bigRand = this.n + 1;
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
    
    insertSort(array, n) {
        for (var i = 1; i < n; i++) {
            var key = array[i];
            var j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j = j - 1;
            }
            j++;
            array[j] = key;
        }
    }
}

new InsertSort(100000);

// module.exports = InsertSort;


function InsertionSort(array) {
    var arrayLength = array.length;
    for (var i = 1; i < arrayLength; i++) {
        var key = array[i];
        var j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        j++;
        array[j] = key;
    }
}
