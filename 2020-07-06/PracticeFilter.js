var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
console.log(r);