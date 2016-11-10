function point([x, y]) {
    return x + y;
}

console.log(point([10, 15])); // 25




function call({id, name}) {
    return `${id} is called ${name}`;
}

console.log(call({id: "id3", name: "Stephen"})); // id3 is called Stephen



const fn = ({b, c}) => console.log(b, c);

fn({a: 10, b: 20, c:30});