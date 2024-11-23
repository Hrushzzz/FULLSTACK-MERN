// ***bind method :::

let car = {
    name: "Mercedes",
    color: "White",
};
  
function buyCar(price) {
console.log(`I bought a ${this.color} ${this.name} of ${price} `);
}

// return a function

console.log(buyCar.bind(car , "5000$"));   // ==> normal bind method


// ***bind polyfill ::: ***