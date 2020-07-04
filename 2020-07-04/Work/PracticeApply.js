var count = 0;
var oldConsole = console.log;
window.console.log = function () {
    count +=1;
    return oldConsole.apply(null, arguments);

}
console.log();
console.log();
console.log();
console.log();
console.log('count = ' + count);