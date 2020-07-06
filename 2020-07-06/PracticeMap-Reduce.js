/*function f(x , y , f) {
    return f(x) + f(y);
}
var x = add(-5 , 6 ,Math.abs);
console.log(x);*/
function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6 ,7];
var results = arr.map(pow);     // map 遍历数组，生成新的数组， for 循环
console.log(results);

// 1 >> pow(1) >> return 1 * 1 >> 1;
// 2 >> pow(2) >> return 2 * 2 >> 4;


arr.map(function (value, index, self) {
    console.log("value is: " + value + ">> index is :" + index)
})

// callback   fn  =>  function
