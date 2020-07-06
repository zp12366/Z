var arr = [10, 20, 1, 2];
arr.sort(function (x , y) {
    if (x < y) {          //(x>y)
        return -1;         //return 1;
    }
    if (x > y) {        //（x<y)
        return 1;       //return -1;
    }
    return 0;
});
console.log(arr);