function MyClass() {
    this.constant = 10;

    this.oldMethod = function () {
        return this.constant;
    };

    this.newMethod = () => {
        return this.constant;
    };
}

const myClass = new MyClass();
const oldMethod = myClass.oldMethod;
const newMethod = myClass.newMethod;

console.log(oldMethod()); // undefined
console.log(newMethod()); // 10

