var arr = [10, 20, 1, 2];
arr.sort(function (x , y) {
    if (x < y) {          //(x>y)
        return -1;         //return 1;
    }
    if (x > y) {        //（x<y)
        return 1;       //return -1;
    }
    return 0;
});

// sort 排序， callbackfn 返回的值 1 0 -1；x = arr[i], y = arr[i + 1]
// 当 x < y 返回 -1
// 当 x > y 返回 1
// 当 x == y 返回 0

console.log(arr);

var ar = [10, 20, 1, 2];

ar.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
});

console.log(ar);
