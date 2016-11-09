"use strict"

// let example
if (true) {
	let hidden = 1;
	var visible = 2;
}

console.log(typeof hidden); // undefined
console.log(typeof visible, visible); // number 2



// let & of
for (let newNum of [1, 2, 3, 4]) {
	console.log(newNum);
}

console.log(typeof newNum); // undefined


// var & in
for (var oldNum in [1, 2, 3, 4]) {
	console.log(oldNum);
}

console.log(typeof oldNum, oldNum); // string 3
