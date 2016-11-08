function MyClass() {
    const constant = 10;

    this.getConstant = function () {
        return constant;
    };

    this.mapArray = function (arr) {
        return arr.map(function (item) {
            return item * constant;
        });
    }
}

const myClass = new MyClass();
const getConstant = myClass.getConstant;
const mapArray = myClass.mapArray;

console.log(getConstant());
console.log(mapArray([1, 2, 3]));

