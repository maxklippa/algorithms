var a = [1, 4, 3, 5, 2];

console.log(a.toString());

for (var j = 1; j < a.length; j++) {
    var key = a[j];
    // добавить a[j] к отсортированной части a[1..j-1]
    var i = j - 1;
    while (i > 0 && a[i] > key) {
        a[i + 1] = a[i];
        i--;
    }
    a[i + 1] = key;
}

console.log(a.toString());