// ***apply method :::

let car = {
    name: "Mercedes",
    color: "White",
};
  
function buyCar(price) {
    console.log(`I bought a ${this.color} ${this.name} for ${price}. `);
};

// buyCar.apply(car, ["300000"]);   // ==> normal apply method


// ***apply polyfill ::: ***

Function.prototype.myApply = function (context = {}, args=[]) {

    if(typeof this !== 'function'){
        throw new Error (this + 'is not callable');
    }

    if(!Array.isArray(args)){
        throw new Error (this + 'We need an array for args');
    }
    
    context.fn = this;   // buyCar

    context.fn(...args);
};

buyCar.myApply(car, [3000000]);