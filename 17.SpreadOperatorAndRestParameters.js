function rest(x, ...arr) {
    return arr;
}

console.log(rest(5, "a", "b", "c")); // [ 'a', 'b', 'c' ]
console.log(rest(5, "a", "b", "c").constructor); // [Function: Array]




function spread(a, b, c) {
    return a + b + c;
}

const arr = [1, 2, 3];

console.log(spread.apply(null, arr)); // 6

console.log(spread(...arr)); // 6
