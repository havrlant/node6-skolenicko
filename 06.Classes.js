// Old School Prototype Class
function PrototypeShape(id, x, y) {
    this.id = id;
    this.move(x, y);
}

PrototypeShape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};

PrototypeShape.prototype._private_method_marked_by_underscore_bleeeeee = function () {
    return private_method_using_external_function_bleeeeeee.call(this);
};

// static
PrototypeShape.getType = function () {
    return "ShapeType";
};

function private_method_using_external_function_bleeeeeee() {
    return this.x;
}



// new ES6 style
class NewShape {
    constructor (id, x, y) {
        this.id = id;
        this.move(x, y);
    }

    move (x, y) {
        this.x = x;
        this.y = y;
    }

    _private_method_marked_by_underscore_bleeeeee() {
        return private_method_using_external_function_bleeeeeee.call(this);
    }

    static getType() {
        return "ShapeType";
    }
}

NewShape.prototype.anotherPublicMethod = function () {
    return "prototype";
};



// The Most Beautiful Syntax Ever Created For Class Definition
function BeautifulShape(id, x, y) {
    this.move = function (newX, newY) {
        x = newX;
        y = newY;
    };

    function real_private_method() {
        return x;
    }
}

BeautifulShape.getType = function () {
    return "ShapeType";
};



// Extending is easy with ES6
class Circle extends NewShape {
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
console.log(NewShape.getType()); // ShapeType
console.log(Circle.getType()); // ShapeType

shape.horizontal = 50;
console.log("horizontal:", shape.horizontal); // 100
console.log("private:", shape._private_method_marked_by_underscore_bleeeeee()); // 100

console.log(shape.anotherPublicMethod());
