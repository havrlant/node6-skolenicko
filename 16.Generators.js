"use strict"

function* naturals(limit) {
	for (let n = 1; n <= limit; n++) {
		yield n;
	}
}

for (let nat of naturals(10)) {
	console.log(nat);
}
