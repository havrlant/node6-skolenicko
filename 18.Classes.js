class Shape {
    constructor (id, x, y) {
        this.id = id;
        this.move(x, y);
    }

    move (x, y) {
        this.x = x;
        this.y = y;
    }

    static getType() {
    	return "ShapeType";
    }
}

class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }

    get horizontal() {
    	return this.x;
    }

    set horizontal(value) {
    	this.x = value * 2;
    }
}

const shape = new Circle("kruh1", 10, 20, 5);
console.log(`[${shape.x}, ${shape.y}]`); // [10, 20]
console.log(Shape.getType()); // ShapeType
console.log(Circle.getType()); // ShapeType
shape.horizontal = 50;
console.log(shape.horizontal); // 100
