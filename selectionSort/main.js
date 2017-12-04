let selectionSort = function (a, n) {
    // 1
    for (let i = 0; i < n - 1; i++) {
        // A
        let min = i;
        // B
        for (let j = i + 1; j < n; j++) {
            // i
            if (a[j] < a[min]) {
                min = j;
            }
        }
        // C
        var temp = a[i];
        a[i] = a[min];
        a[min] = temp;
    }
};

let input = [9, 8, 7, 6, 5, 4, 3, 2, 1];

selectionSort(input, input.length);
console.log(input.toString());