"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 5;
var b = 5;
var c = a + b;
console.log(c);
var myVariable = 'This is a string';
var num = 5;
var name = 'Alex';
var isPresent = true;
console.log(myVariable + ', ' + num + ', ' + name + ', ' + isPresent);
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is " + this.model);
    };
    return Car;
}());
var Prius = new Car('Prius', 4, true);
Prius.displayMake(); // This car is Prius
console.log(Prius);
//# sourceMappingURL=example1.js.map