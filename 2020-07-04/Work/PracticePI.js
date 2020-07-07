function area_of_circle(r , pi) {
    // for (let arg of arguments) {
    //     console.log("argument is :" + arg);
    // }
    // arguments
    if (arguments.length < 2){
        pi = 3.14;
    }
    s = pi * r * r;
    return s;
}

console.log(area_of_circle(2))                   // arguments = [2]              arguments.length = 1;   3.14 * 2 * 2

console.log(area_of_circle(2 ,3.1415))       // arguments = [2, 3.1415]      arguments.length = 2;   3.1415 * 2 * 2
