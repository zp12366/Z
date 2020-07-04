function foo() {
    var x = 1;
    function bar() {
        var x = 'A';
        console.log('x in bar() = ' + x);
    }
    console.log('x in foo() =' + x);
    bar();
}
console.log(foo());