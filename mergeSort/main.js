let merge = function (a,p,q,r){

};

let mergeSort = function (a, p, r) {
    if (p >= r) {
        return;
    }

    let q = Math.floor((p+r)/2);

    mergeSort(a,p,q);
    mergeSort(a,q+1,r);
    merge(a,p,q,r);
};

let input = [9, 8, 7, 6, 5, 4, 3, 2, 1];
mergeSort(input, o, input.length);
console.log(input.toString());