//https://www.freecodecamp.org/news/learn-typescript-in-5-minutes-13eda868daeb/
export {};
let a = 5;  
let b = 5;  
let c = a + b;
console.log(c);

let myVariable: any = 'This is a string'
let num: number = 5;  
let name: string = 'Alex';  
let isPresent: boolean = true;
console.log(myVariable + ', ' + num + ', ' + name + ', ' + isPresent);

class Car {
    // fields  
      model: String;  
      doors: Number;  
      isElectric: Boolean;
    
    constructor(model: String, doors: Number, isElectric: Boolean) {  
        this.model = model;  
        this.doors = doors;  
        this.isElectric = isElectric;  
      }
    
    displayMake(): void {  
        console.log(`This car is ${this.model}`);  
      }    
    }
const Prius = new Car('Prius', 4, true);  
Prius.displayMake(); // This car is Prius
console.log(Prius);

