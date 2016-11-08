function fn(a, b, c) {
    return a + b + c;
}

const arr = [1, 2, 3];

console.log(fn.apply(null, arr)); // 6

console.log(fn(...arr)); // 6
