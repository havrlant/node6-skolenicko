// let example
if (true) {
    var visible = 1;
    let hidden = 2;
}

console.log(typeof visible, visible); // number 1
console.log(typeof hidden); // undefined


for (let i = 0; i < 10; i ++) {
    // do something
}

console.log(typeof i); // undefined