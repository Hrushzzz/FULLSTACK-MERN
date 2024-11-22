//When you create a variable using let and const, and do not assign values to them, then they are uninitialized.
//const declarations must be initialized.
//Variables declared using var is initialized by undefined by default. hence we can access them. 
//If values are unintialized , then they cannot be acessed . if we try to do it they give us error.
//var is global scope , where as let and const are functional scope.


// => Q1.

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Hrishi';
//     let age = 25;
// }
// sayHi();


// A: Hrishi and undefined
// B: Hrishi and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError   --> this is the correct answer

//------------------------------------------------------------------------------------//

// => Q2.    ==> output: 3,3,3

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }   

//------------------------------------------------------------------------------------//

// => Q3.    ==> output: 0,1,2

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

//copy of i is created inside this loop.
//this cb function remembers the value of i because of closures, hence value of i is used .

//------------------------------------------------------------------------------------//

// => Q4.

// const shape = {
// radius: 10,
// diameter() {
//     return this.radius * 2;
// },
// perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());   //20
// console.log(shape.perimeter());  //nan
//Arrow functions do not have their own "this", they point to their parents "this".

//------------------------------------------------------------------------------------//

// => Q5.   ==> answer: A

// const bird = {
//     size: 'small',
//   };
//   let obj={
//     size: 'small',
//   }

//   const mouse = {
//     name: 'Mickey',
//     small: true,
//   };

// A: mouse.bird.size is not valid    //error
// B: mouse[bird.size] is not valid    //true
// C: mouse[bird["size"]] is not valid   //true 
// D: All of them are valid

//------------------------------------------------------------------------------------//

// =>Q6.    ==> output: "Hello"

// let c = { greeting: 'Hey!' };   //4k -> obj 
// let d;

// d = c;  //4k 
// c.greeting = 'Hello';
// console.log(d.greeting);

//------------------------------------------------------------------------------------//

// =>Q7. 

// class Chameleon {
//     static colorChange(newColor) {
//       this.newColor = newColor;
//       return this.newColor;
//     }
  
//     constructor({ newColor = 'green' } = {}) {
//       this.newColor = newColor;
//       console.log(newColor);
//     }
// }
  
// const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.colorChange('orange'));  //output: type error

//Static methods can only called by the class, not instances.
//They can be called from outside using ClassName.methodName().
//They cannot be called on instances of the class.
//They cannot access instance-specific data (this keyword).

//Static methods are designed to live only in the constructor in which they are created and
// cannot be passed down to any children or called upon class instances. 

//------------------------------------------------------------------------------------//

// => Q8.   ==> output: "Hrishi Kesh"

// constructor function 
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// const member = new Person('Hrishi', 'Kesh');
// //   this-> {firstName: "Hrishi", lastName:"Kesh"}
// console.log(member);
// //   Person.getFullName = function() {
// //     return `${this.firstName} ${this.lastName}`;
// //   };

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };
  
// console.log(member.getFullName());

//------------------------------------------------------------------------------------//

// => Q9.   ==> output: 12

// function sum(a, b) {
//   return a + b;
// }
  
// console.log(sum(1, '2'));

//------------------------------------------------------------------------------------//

// => Q10.

// let number = 0;
// console.log(number++); //0
// console.log(++number); //2
// console.log(number); //2

//------------------------------------------------------------------------------------//

// => Q11.    ==> output: Hmm.. You don't have an age I guess

// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log('You are an adult!');
//   } else if (data == { age: 18 }) {
//     console.log('You are still an adult.');
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }
  
// checkAge({ age: 18 });

//------------------------------------------------------------------------------------//

// => Q12.

// const person = { name: 'Hrishi' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 25));
// console.log(sayHi.bind(person, 25));
// let fn=sayHi.bind(person, 25)
// console.log(fn());

//------------------------------------------------------------------------------------//

// => Q13. 

const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));