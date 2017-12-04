let binarySearch = function (a, n, x) {
    // 1
    let p = 0;
    let r = n - 1;

    // 2
    while (p <= r) {
        // A
        let q = Math.floor((p + r) / 2);
        // B
        if (a[q] == x) {
            return true;
        }
        // C
        if (a[q] > x) {
            r = q - 1;
        }
        // D
        if (a[q] < x) {
            p = q + 1;
        }
    }
    // 3
    return false;
};

let recursiveBinarySearch = function (a, p, r, x) {
    // 1 (базовый случай)
    if (p > r) {
        return false;
    }

    // 2 
    // A
    let q = Math.floor((p + r) / 2);

    // B
    if (a[q] == x) {
        return true;
    }

    // C
    if (a[q] > x) {
        return recursiveBinarySearch(a, p, q - 1, x);
    }

    // D
    if (a[q] < x) {
        p = q + 1;
        return recursiveBinarySearch(a, q + 1, r, x);
    }
};

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(recursiveBinarySearch(input, 0, input.length - 1, 3));
console.log(recursiveBinarySearch(input, 0, input.length - 1, 7));
console.log(recursiveBinarySearch(input, 0, input.length - 1, 0));
console.log(recursiveBinarySearch(input, 0, input.length - 1, 10));

// console.log(binarySearch(input, input.length, 3));
// console.log(binarySearch(input, input.length, 7));
// console.log(binarySearch(input, input.length, 0));
// console.log(binarySearch(input, input.length, 10));