function arrayMatching([x, y]) {
    return x + y;
}

function objectMatching({id, name}) {
    return `${id} is called ${name}`;
}

console.log(arrayMatching([10, 15])); // 25
console.log(objectMatching({id: "id3", name: "Stephen", another: "nothing"})); // id3 is called Stephen
