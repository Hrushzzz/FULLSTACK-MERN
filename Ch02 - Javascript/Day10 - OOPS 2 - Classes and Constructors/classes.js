// *** Creating a Class ***

class Pizza {
    //constructor method
    constructor(toppings , size , crust) {
        this.toppings = toppings;
        this.size = size;
        this.crust = crust;
    }

    describe() {
        console.log(`This pizza has topping as ${this.toppings} and is of ${this.size} size and its crust is ${this.crust}`);
    }
}

const Pizza1 = new Pizza("cheese" , "medium" , "thin");
console.log(Pizza1);

Pizza1.describe();


// *** Inheritance ***

class StuffedPizza extends Pizza{
    constructor(toppings , size , crust , stuffing) {
        super(toppings , size , crust);
        this.stuffing = stuffing;
    }
}


const Pizza2 = new StuffedPizza("butter" , "large" , "thick" , "cheese and garlic");
console.log(Pizza2);