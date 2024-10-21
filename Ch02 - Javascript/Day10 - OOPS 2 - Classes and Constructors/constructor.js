// let Pizza1 = {
//     toppings : ['cheese' , 'tomatoes' , 'corn'],
//     size : 'small' ,
//     crust : 'thin' 
// }

// let Pizza2 = {
//     toppings : ['cheese' , 'onion' , 'pepper'],
//     size : 'large' ,
//     crust : 'thick' 
// }


// ***Constructor function***

//Constructor functions in JavaScript are a way to create multiple objects with the same structure, methods, and properties.
// They act like a blueprint for creating instances of a particular type of object.

function Pizza(Toppings , Size , Crust) {
    this.toppings = Toppings;
    this.size = Size;
    this.crust = Crust;

    this.describe = function() {
        console.log(`This pizza has ${this.toppings} of ${this.size} size and crust is ${this.crust}`);
    }
}

let Pizza1 = new Pizza(["cheese" , "corn" , "tomato"] , "medium" , "thin");
let Pizza2 = new Pizza(["onion" , "mayo" , "capsicum"] , "small" , "thick");

// Pizza1.toppings = ["Onion"];

console.log(Pizza1);
console.log(Pizza2);

Pizza1.describe();
Pizza2.describe();