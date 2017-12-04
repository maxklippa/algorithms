let insertionSort = function (a, n) {
    // 1
    for (let i = 1; i < n; i++) {
        // A
        let key = a[i];
        let j = i - 1;
        for (; /*B*/j >= 0 && a[j] > key; j--/*ii*/) {
            // i
            a[j + 1] = a[j];
        }
        // C
        a[j + 1] = key;
    }
};

let input = [5, 4, 3, 2, 1, 9, 8, 7, 6];

insertionSort(input, input.length);
console.log(input.toString());
