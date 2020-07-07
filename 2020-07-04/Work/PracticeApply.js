var count = 0;
var oldConsole = console.log;
window.console.log = function () {
    count += 1;
    return oldConsole.apply(null, arguments);
}

var a  = {b: 2};

console.log(a.b);

console.log(window.a.b);

console.log();
console.log();
console.log();
console.log();
console.log('count = ' + count);
