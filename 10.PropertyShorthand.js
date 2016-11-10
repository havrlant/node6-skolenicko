function oldFn(a, b) {
    return {a: a, b: b};
}

function fn(a, b) {
    return {a, b};
}

console.log(oldFn(2, 4, 6)); // { a: 2, b: 4 }
console.log(fn(2, 4, 6)); // { a: 2, b: 4 }

