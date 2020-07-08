function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {        // i = 1        2       3
                return n * n;           // n = 1;       2       3
            }
        })(i));
    }
    return arr;
}
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1());     // 1 * 1
console.log(f2());      // 2 * 2
console.log(f3());      // 3 * 3

