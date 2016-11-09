"use strict"

function* naturals(limit) {
	for (let n = 1; n <= limit; n++) {
		yield n;
	}
}



let sum = 0;
for (let nat of naturals(100000000)) {
	sum += nat; // Pohoda
}
console.log(sum);




let numbers = [];
for (let nat of naturals(100000000)) {
	numbers.push(nat); // FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory
}
console.log(numbers.length);
