function MyClass() {
    this.number = 42;
}

MyClass.prototype.function = function () {
    return this.number;
};

MyClass.prototype.arrowMethod = () => {
    return this.number;
};

const instance = new MyClass();
console.log(instance.function()); // 42
console.log(instance.arrowMethod()); // undefined
