function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0? x : -x;
}
console.log(abs());
console.log(abs(10));
console.log(abs(-9));