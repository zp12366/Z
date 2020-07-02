var person2 = {
   run:function f() {
       console.log("person2 is running.");
   }
}
person2.run();
var run = function () {
    console.log("var run, person is runing");
}

function run2() {
    console.log("function run2, person is running");
}

console.log(person2.run());
console.log(run());
console.log(run2());
console.log(function () {
    console.log("run3 person is running");
}());