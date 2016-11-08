const numbers = new Set();
numbers.add(1).add(2).add(3);

console.log(numbers.size); // 3
console.log(numbers.has(2)); // true
console.log(numbers.has(20)); // false

for (let key of numbers.values()) // insertion order
    console.log(key);