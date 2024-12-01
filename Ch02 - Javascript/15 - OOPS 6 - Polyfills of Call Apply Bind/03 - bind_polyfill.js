// ***bind method :::

let car = {
    name: "Mercedes",
    color: "White",
};
  
function buyCar(price) {
console.log(`I bought a ${this.color} ${this.name} of ${price} `);
}

// return a function

// console.log(buyCar.bind(car , "5000000"));   
// let bindedFn = buyCar.bind(car , 5000000);   // ==> normal bind method
// console.log(bindedFn);    // output: [Function: bound buyCar]


// ***bind polyfill ::: ***

// Function.prototype.myBind = function (context = {}, ...args) {

//     if(typeof this !== 'function'){
//         throw new Error (this + 'is not callable');
//     }
    
//     context.myFunction = this;   // fn: buyCar

//     return function(...args2) {
//          return context.myFunction(...args , ...args2)
//     }
// };


// *** 2nd Implementation of Bind Polyfill ::: ***

Function.prototype.myBind2 = function(...args) {
    let myFunction = this; // buyCar

    let params = args.slice(1);

    return function(...args2){
        myFunction.apply(args[0] , [...params , ...args2] );
    }
}

//let myBindedFn = buyCar.myBind(car , '3000000');
//console.log(myBindedFn);
//myBindedFn();

let myBindedFn2 = buyCar.myBind2(car , '3000000');
//console.log(myBindedFn2);
myBindedFn2();