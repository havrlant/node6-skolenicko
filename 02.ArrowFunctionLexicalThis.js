function MyClass() {
    this.constant = 10;

    // ES 5
    this.oldMethod = function (arr) {
        return arr.map(function (item) {
            return this.constant * item;
        });
    };

    // ES 6
    this.newMethod = arr => {
        return arr.map(item => this.constant * item);
    };
}

const myClass = new MyClass();
console.log(myClass.oldMethod([1, 2, 3])); // [ NaN, NaN, NaN ]
console.log(myClass.newMethod([1, 2, 3])); // [ 10, 20, 30 ]