function fn(a, b, c) {
    return {a, b, c};
}

function oldFn(a, b, c) {
    return {a: a, b: b, c: c};
}

console.log(fn(2, 4, 6)); // { a: 2, b: 4, c: 6 }
console.log(oldFn(2, 4, 6)); // { a: 2, b: 4, c: 6 }

