function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {  // 循环结束以后，i = 4;
        // --
        // ...
        // i = i
        arr.push(function () {
            return i * i;
        });
        // ...

        // 默认添加在这里 i = i + 1；
    }
    return arr;
}
// push: 从数组末尾添加元素 pop 数组末尾删除 shift 数组前面删除 unshift 删除前面添加
var results = count();

console.log("resutls length: " + results.length);

var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1());          // console.log(function (){return i * i;} ())
console.log(f2());
console.log(f3());


function f() {
    // ....
}

//f();

var ff = function () {

}

ff();

(function () {})();         // x * (x - 1);


