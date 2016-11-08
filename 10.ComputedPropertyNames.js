const PREFIX = "foo_";
const object = {
    [PREFIX + "key"]: 42
};


const oldObject = {};
oldObject[PREFIX + "key"] = 42;


console.log(object); // { foo_key: 42 }
console.log(oldObject); // { foo_key: 42 }