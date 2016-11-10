const PREFIX = "foo_";

// ES 5
const oldObject = {};
oldObject[PREFIX + "key"] = 42;

// ES 6
const object = {
    [PREFIX + "key"]: 42
};


console.log(oldObject); // { foo_key: 42 }
console.log(object); // { foo_key: 42 }
