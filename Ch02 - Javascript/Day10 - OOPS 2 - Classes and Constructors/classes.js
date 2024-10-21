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