function MyClass() {
    this.number = 42;
}

MyClass.prototype.arrowMethod = () => {
    return this.number;
};

MyClass.prototype.function = function () {
    return this.number;
};

const instance = new MyClass();
console.log(instance.arrowMethod()); // undefined
console.log(instance.function()); // 42

