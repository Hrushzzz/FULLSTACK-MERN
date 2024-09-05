//Adding two numbers

//1. This is the traditional way of creating a function
function addTwoNum (a , b) {
    let sum = a + b;
    console.log(sum);
}

//invoking the function
addTwoNum(10 , 7);
addTwoNum("Hrishi" , "Spiderman");

//This is the "Traditional Function"
function sayHi() {
    console.log("Normal function");
}
sayHi();


//2. Functions as First Class Citizens
//This is also called as "Functions as Expressions"
let sayHiFC = function() {
    console.log("Function as a First Class Citizen");
}
console.log(sayHiFC);
sayHiFC();

// creating a multiply 2 numbers function with fist class citizen concept
let mul = function(a , b) {
    console.log(a * b);
}
mul(6 , 17);

let div = function(x , y) {
    console.log(x/y);
}
div(16 , 4);

//3. Arrow Functions

let subtract = (n , m) => {
    console.log(n-m);
}
subtract(17,6);

let superHero = (firstName , lastName) => {
    console.log(firstName + lastName);
}
superHero("Captain" , "America");



