let linearSearch = function (a, x) {
    let result = false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == x) {
            result = true;
        }
    }
    return result;
};

let betterLinearSearch = function (a, x) {
    // 1
    for (let i = 0; i < a.length; i++) {
        // A
        if (a[i] == x) {
            return true;
        }
    }
    // 2
    return false;
};

let sentinelLinearSearch = function (a, x) {
    let n = a.length - 1;
    console.log("n = " + n);

    let last = a[n];
    a[n] = x;
    var i = 0;
    while (a[i] != x) {
        i++;
    }
    a[n] = last;
    console.log("i = " + i);
    return i < n || a[n] == x;
};

let recursiveLinearSearch = function (a, n, i, x) {
    // 1 (базовый случай)
    if (i == n) {
        return false;
    }
    // 2
    if (a[i] == x) {
        return true;
    }
    // 3
    return recursiveLinearSearch(a, n, ++i, x);
}

let input = ["Иванов", "Петров", "Сидоров"];
let x1 = "Петров";
let x2 = "Путин";

// console.log(linearSearch(input, x1));
// console.log(linearSearch(input, x2));

// console.log(betterLinearSearch(input, x1));
// console.log(betterLinearSearch(input, x2));

// console.log(sentinelLinearSearch(input, x1));
// console.log(sentinelLinearSearch(input, x1));

console.log(recursiveLinearSearch(input, input.length, 0, x1));
console.log(recursiveLinearSearch(input, input.length, 0, x2));
