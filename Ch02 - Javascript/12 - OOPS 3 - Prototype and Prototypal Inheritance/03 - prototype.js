//acessing the """Constructor prototype""" of Car function/constructor

Car.prototype.displayInfo = function() {
    console.log(`This is a ${this.name} car manufactured in ${this.year} and its color is ${this.color}`);
    };

Car.prototype.topSpeed = function() {
    console.log(`The ${this.name} car can go upto a top speed of ${this.speed}`);
};

//accessing the ""default prototype"""   -->  __proto__

Car.prototype.__proto__.displayColor = function() {
    console.log(`Color of the Car is ${this.color}`);
};


// let book = {
//     name: "The Great Gatsby",
//     publishedIn: 2014
// };

// console.log(book);
// book.displayColor();


function Car(Name, Year, Color, Speed) {
    this.name = Name;
    this.year = Year;
    this.color = Color;
    this.speed = Speed;

    // this.displayInfo = function() {
    //     console.log(`This is a ${this.name} car manufactured in ${this.year} and its color is ${this.color}`);
    // };

    // this.topSpeed = function() {
    //     console.log(`The ${this.name} car can go upto a top speed of ${this.speed}`);
    // }
  }
  
  let car1 = new Car("Mustang", 2021, "Red" , "298 kmph");
  let car2 = new Car("Skoda", 2024, "Black" , "210 kmph");
  
  console.log(car1);
  console.log(car2);

  car1.displayInfo();
  car1.topSpeed();
  car2.displayInfo();
  car2.topSpeed();

  console.log(car1.hasOwnProperty("color"));   //output : true
  //We can access both constructor/function prototype and default/object prototype as well.

  car1.displayColor();
  car2.displayColor();
  
//   car1.showYOM();   //output : Error - function doesn't exist

//When a function we called doesn't exist in Constructor prototype and Default prototype,
//it will be pointed to a Null container.

//Objects Inheriting a function from Prototype is called as "Prototypal Inheritance".