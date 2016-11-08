function fn(x, ...a) {
    return a;
}

console.log(fn(5, "a", "b", "c")); // [ 'a', 'b', 'c' ]

console.log(fn(5, "a", "b", "c").constructor); // [Function: Array]