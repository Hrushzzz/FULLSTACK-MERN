const person1 = {
    name : "Hrishi",
    age : 25,

    printNameAndAge : function(location , color) {
      console.log(
        `My name is ${this.name} and I am ${this.age} years old, I live in ${location} and my fav color is ${color}`);
    }
};

const person2 = {
    name : "Cherry",
    age : 23
};

const person3 = {
    name : "Nani",
    age : 13
};

person1.printNameAndAge.apply(person3 , ["Argentina" , "Black"]);