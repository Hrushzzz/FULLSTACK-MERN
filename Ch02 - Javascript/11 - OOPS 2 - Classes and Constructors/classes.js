// *** Creating a Class ***

class Pizza {
    static totalPizzasMade = 0;  //static value

    #toppings;   //private variables
    #size;
    #crust;

    //constructor method
    constructor(toppings , size , crust) {
        this.#toppings = toppings;
        this.#size = size;
        this.#crust = crust;
        //***Static methods belong to a class itself rather than to instances of the class***
        Pizza.totalPizzasMade++;
    }

    describe() {
        console.log(`This Pizza has ${this.#toppings} with ${this.#crust} crust and a ${this.#size} Size`);
    }

    static calculateNumberOfPizzas() {    //static method
        console.log(`Total Pizzas Made : ${Pizza.totalPizzasMade}`);
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
const Pizza3 = new StuffedPizza("butter" , "small" , "thin" , "chilli");
console.log(Pizza2);

Pizza.calculateNumberOfPizzas();

//Note :: To use static values, we create static methods.
// To compute or modify static values , we create static methods.

//we can call static property from a non-static function