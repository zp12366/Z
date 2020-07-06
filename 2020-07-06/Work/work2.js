/*var arr = [2, 6, 7, 11, 11, 27, 31, 32];
var res = arr.filter(function (x) {
    return x % x  == 1;

});
console.log(res);*/

function pow(x) {
    return x % 2 ;
}
var arr = [2, 6, 7, 11, 11, 27, 31, 32];
var results = arr.filter(pow);
console.log(results);