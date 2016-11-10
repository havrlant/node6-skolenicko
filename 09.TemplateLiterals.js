const name = "Star Trek";

// ES 5
console.log("My favourite tv show is " + name + " which has " + name.length + " characters.");
console.log(require("util").format("My favourite tv show is %s which has %s characters.", name, name.length));

// ES 6
console.log(`My favourite tv show is ${name} which has ${name.length} characters.`);

console.log(`
Multiline!!!
Multiline!!!
Multiline!!!
Multiline!!!
Multiline!!!
`);
