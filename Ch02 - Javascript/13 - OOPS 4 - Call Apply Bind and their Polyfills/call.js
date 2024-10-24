function printNameAndAge(location , color) {
      console.log(
        `My name is ${this.name} and I am ${this.age} years old, I live in ${location} and my fav color is ${color}`);
};


const person1 = {
    name : "Hrishi",
    age : 25,

    // printNameAndAge : function(location , color) {
    //   console.log(
    //     `My name is ${this.name} and I am ${this.age} years old, I live in ${location} and my fav color is ${color}`);
    // }
};

const person2 = {
    name : "Cherry",
    age : 23
};

const person3 = {
    name : "Nani",
    age : 13
};

//person1.printNameAndAge();

//"call" function

// The Object from which we are going to Borrow the method
// This is also called as "Function Borrowing"

//person1.printNameAndAge.call(person2);
//person2.printNameAndAge;
//person1.printNameAndAge.call(person3);
//person3.printNameAndAge;


// person1.printNameAndAge.call(person3 , "Brazil" , "Orange");     //accessing while inside an object
printNameAndAge.call(person3 , "Brazil" , "Orange");   //accessing a global one