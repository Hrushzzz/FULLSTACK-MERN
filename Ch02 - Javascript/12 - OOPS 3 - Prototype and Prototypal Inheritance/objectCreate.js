let carPrototype = {
    displayColor : function() {
        console.log(`${this.color}`);
    },
    displayInfo : function() {
        console.log(`This is a ${this.name} car manufactured in ${this.year} and its color is ${this.color}`);
    }
}

let bookPrototype = {
    displayAuthor : function() {
        console.log(`${this.author}`);
    },
    displayInfo : function() {
        console.log(`This book is ${this.name} and it is written by ${this.author}`);
    }
}

let car1 = Object.create(carPrototype);
car1.name = "Lamborghini";
car1.year = 2024;
car1.color = "Yellow";

let car2 = Object.create(carPrototype);
car2.name = "Mercedes";
car2.year = 2019;
car2.color = "Gray";

let book1 = Object.create(bookPrototype);
book1.name = "Harry Potter";
book1.author = "JK Rowling"

console.log(car1);
console.log(car2);
car1.displayColor();
car1.displayInfo();

console.log(book1);
book1.displayAuthor();
book1.displayInfo();