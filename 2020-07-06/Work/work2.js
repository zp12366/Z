/*var arr = [2, 6, 7, 11, 11, 27, 31, 32];
var res = arr.filter(function (x) {
    return x % x  == 1;

});
console.log(res);*/

function isPrime(x) {
    for(i = 2; i < x / 2 + 1; i++){
        if (x % i === 0){
            return true;
        }
    }

    return false;   // 质数
}
var arr = [2, 6, 7, 11, 13, 27, 31, 32];
var results = arr.filter(isPrime);      // bool， true 保留，false 删除
console.log(results);



// 6 (1, 2, 3, 6)   // 4        // 2 - 4  4 - 6.        // ((x / 2) + 1)  * 2 = x + 2
// 15 (1, 3, 5, 15) // 7.5
// 16 (1, 2, 4, 8, 16)  // 9
