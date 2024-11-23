// ***call method :::

let car = {
    name: "Mercedes",
    color: "White",
};
  
function buyCar(price) {
    console.log(`I bought a ${this.color} ${this.name} for ${price}. `);
};

// buyCar.call(car , 500000);  ==> normal call method

// Spread Operator (...):::  Used to expand elements, breaks down a data structure into individual elements
// Rest Parameter (...)::: Used to collect multiple elements into an array, Combines individual elements into an array


// ***call polyfill ::: ***

Function.prototype.myCall = function(context = {} , ...args) {
    console.log(this);
    // context -> car object

    if (typeof this !== 'function') {
        throw new Error (this + "is not callable");
    }
  
    context.myFunction = this;  // buyCar
    // {
    //     name: "Mercedes",
    //     color: "White",
    //     myFunction: buyCar(),
    // }
    context.myFunction(...args);
};

buyCar.myCall(car, "3000000");