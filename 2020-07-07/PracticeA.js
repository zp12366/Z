function create_counter(initial) {
    var x = initial || 0;
    return {
        age: 20,
        inc: function () {
            x += 1;
            return x;
        }
    }
}

var c1 = create_counter();
c1.inc(); // 1      // x = 1;
c1.inc(); // 2      // x = 2;
c1.inc(); // 3      // x = 3;

var c2 = create_counter(10);
c2.inc(); // 11
c2.inc(); // 12
c2.inc(); // 13
