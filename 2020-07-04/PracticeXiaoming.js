function getAge() {
    var y = new Date().getFullYear();
    return y - this.brith;

}
var xiaoming = {
    name: '小明',
    bireh:1980,
    age:getAge()
};
console.log(xiaoming.age);
console.log(getAge());