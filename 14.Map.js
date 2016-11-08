const emptyObject = {};

const map = new Map(); // iterability-in-order
map.set("key", "value").set(emptyObject, 1).set({}, 2);

console.log(map.get("key")); // value
console.log(map.size); // 3
console.log(map.has(emptyObject)); // true
console.log(map.has({})); // false



const oldObject = {};

oldObject[{}] = 1;
oldObject[emptyObject] = 2;

console.log(Object.keys(oldObject)); // [ '[object Object]' ]



