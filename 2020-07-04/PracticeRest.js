function foo(a,b, ... rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
console.log(foo(1 , 2 , 3 , 4 , 5));
console.log(foo(1));