function MyClass() {
    this.constant = 10;

    this.oldMethod = function (arr) {
        return arr.map(function (item) {
            return this.constant * item;
        });
    };

    this.newMethod = arr => {
        return arr.map(item => this.constant * item);
    };
}

const myClass = new MyClass();
console.log(myClass.oldMethod([1, 2, 3]));
console.log(myClass.newMethod([1, 2, 3]));