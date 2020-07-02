var array=[10 , 20 , '30' , 'xyz'];
array.indexOf(10);
array.indexOf(20);
array.indexOf(30);
array.indexOf('30');
//sice//
var array = ['a' , '2' , '3' , '4' , '5' , '6' ,'7 '];
array.slice(0,3);
array.slice(3);
//unshift,shift//
var arr=['1' , '2'];
arr.unshift('a' , 'b');
arr.shift('a');
arr.shift();arr.shift();arr.shift();
arr;
arr.shift();
arr;
//sort 排序//
var array = ['2' , '1' , '3'];
array.sort();
array;
//reverse 反转//
var arr = ['one' , 'two' , 'three'];
arr.reverse();
arr;
//splice//
var arr = ['1', '2' , '3' , '4'];
arr.splice(1 , 2 , 'z' ,'p');
arr;
arr.splice(1 , 2);
arr;
arr.splice(3 , 0 , 'w' , 'l');
arr;
//concat//
var add = ['1' , '2'];
var bdd = add.concat(['3' , '4']);//var bdd = add.concat('2' , '3');
bdd;
add;
//join//
var add = ['1' , '2'];
add.join('-')