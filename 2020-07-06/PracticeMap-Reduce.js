/*function f(x , y , f) {
    return f(x) + f(y);
}
var x = add(-5 , 6 ,Math.abs);
console.log(x);*/
function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6 ,7];
var results = arr.map(pow);
console.log(results);