Book.prototype.hasOwnProperty = function() {
    console.log("Hello");
}

function Book (Name , Author) {
    this.name = Name;
    this.author = Author;
}

let book1 = new Book("Harry Potter" , "JK Rowling");

console.log(book1);
book1.hasOwnProperty();   //output : "Hello"  --> as per Prototype chaining rule
// And this is called as "Function Shadowing".