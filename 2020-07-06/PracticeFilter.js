var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];
var r = arr.filter(function (x) {           // 过滤, 函数返回值是一个 bool 类型
    return x % 2 !== 0;         // java ==, !=  //javaScript: == 判断值，不判断类型，比如：2 == '2' 是成立的  2 === '2' 不成立
});
console.log(r);
