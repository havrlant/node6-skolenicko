// let example
if (true) {
    let hidden = 1;
    var visible = 2;
}

console.log(typeof hidden); // undefined
console.log(typeof visible, visible); // number 2


for (let i = 0; i < 10; i ++) {
    // do something
}

console.log(typeof i); // undefined