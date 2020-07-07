/*function sum(arr) {
    return arr.reduce(function (x, y) {
        return x + y;

    });

}
console.log(sum([1, 2, 3, 4, 5]));*/

function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}
var f = lazy_sum([1, 2, 3, 4, 5]);
console.log(f());