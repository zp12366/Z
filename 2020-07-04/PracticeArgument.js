function foo(x) {
    console.log('x = ' + x);
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]);
    }

}
console.log(foo(10, 20 ,30));