var arr = ['A', 'p', 'o'];
console.log(arr.every(function (s) {
    return s.length > 0;
}));
console.log(arr.every(function (s) {
    return s.toLowerCase() === s;

}))