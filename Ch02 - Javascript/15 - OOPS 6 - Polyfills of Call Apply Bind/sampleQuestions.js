// Call , Apply , Bind example :::

// var obj = {name : 'Hrishi' , occupation : 'Software Enginner'}

// function sayHello(age , lastname){
//     return 'Hello, ' + this.name + ' is ' + age + 'years old and he is a '+ this.occupation + ' and his last name is ' + lastname;
// }

// let ans = sayHello.call(obj , 25 , 'Spiderman');

// let ans2 = sayHello.apply(obj , [ 25 , 'Spiderman']);

// let ans3 = sayHello.bind(obj) // stores my function binded with the object

// console.log(ans3(23 , 'Kesh'));
// console.log(ans3(24 , 'Messi'));
// console.log(ans3(25 , 'Dhoni'));
// console.log(ans3(26 , 'Prabhas'));

// console.log(ans);
// console.log(ans2);

//------------------------------------------------------------------------------------//

// => Q1.

// const person = { name: 'Hrishi' };

// function sayHi(age) {
//   return `${this.name} is ${age} years old`;
// }

// console.log(sayHi.call(person, 25));  // output: Hrishi is 25 years old
// let a = sayHi.bind(person, 25);
// console.log(a());   // output: Hrishi is 25 years old

//------------------------------------------------------------------------------------//

// => Q2.

// const age = 10;

// var person = {
//   name: "Hrishi",
//   age: 20,
//   getAge: function(){
//     return this.age;
//   }
// }

// var person2 = {age:  25};
// console.log(person.getAge.call(person2)); // output: 25

//------------------------------------------------------------------------------------//

// => Q3.

// let status = 'hi'

// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());   // output: 🥑
//   console.log(data.getStatus.call(this));    // output: undefined
// }, 0);

//------------------------------------------------------------------------------------//

// => Q4.

// const animals = [
//   { species: "Lion", name: "King" },
//   { species: "Tiger", name: "Queen" },
// ];

// function printAnimals(i) {
//   this.print = function () {
//     console.log("#" + i + " " + this.species + ": " + this.name);
//   };
//   this.print();
// }

// for (let i = 0; i < animals.length; i++) {
//   printAnimals.call(animals[i], i);
// }

// output ==>  #0 Lion: King
//             #1 Tiger: Queen

//------------------------------------------------------------------------------------//

// => Q5.

const numbers = [1, 2, 3, 4, 5];

console.log(Math.max.apply(null, numbers));
//console.log(Math.max.call(null, 1,2,3,4,5));
console.log(Math.min.apply(null , numbers));   //"apply" method expects an object and an array,
                                               // if there's no object, we can pass "null".

let max = -Infinity;
let min = Infinity;

for(let i=0 ; i<numbers.length ; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
    if(numbers[i] < min){
        min = numbers[i];
    }
}

console.log("max ::: " , max);
console.log("min ::: " , min);
