/*var fu = x => x * x;
console.log(fu(2))*/
var fm = x => {
    if (x > 0) {
        return x * x;
    }else {
        return  -x * x;
    }
}
console.log(fm(-2));