function point([x, y]) {
    return x + y;
}

function call({id, name}) {
    return `${id} is called ${name}`;
}

console.log(point([10, 15])); // 25
console.log(call({id: "id3", name: "Stephen"})); // id3 is called Stephen