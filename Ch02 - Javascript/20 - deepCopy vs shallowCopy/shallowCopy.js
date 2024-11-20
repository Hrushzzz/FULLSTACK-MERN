// Primitive datatypes are stored in Stacks
// where as reference datatypes are stored in Heap ,
// but the Object address/reference is stored in Stack.

let obj = { name: "Hrishi", age: 25 };

let newObj = { ...obj }; //spread Operator
//it creates a copy in a different memory location.
//and copy all the key-value pairs into the newObj,
//so that we can make the changes independently.

console.log(newObj);

obj.name = "Nani";

console.log("obj ::: ", obj);
console.log("newObj ::: ", newObj);

//Shallow copy --> it is going to copy key,value pairs at the top level only,
//It creates a copy only at first level of the Primitive datatype,
//and it doesn't copy non-primitive datatype, it references it.

//shallowCopy using "spread" Operator --> {...name} :::
let zoo = {
  //memory location : 12k
  name: "Bandipur",
  location: "Wayanad, Kerala",
  animals: [
    {
      species: "Lion",
      favFood: "Meat",
    },
    {
      species: "Panda",
      favFood: "Bamboo",
    },
  ],
};

let shallowCopyZoo = { ...zoo }; //memory location : 16k
shallowCopyZoo.name = "Mangroove";
shallowCopyZoo.location = "Hubli, Karnataka";
shallowCopyZoo.animals[0].species = "Tiger";

console.log("from Spread operator ::: ", zoo);
console.log("from Spread operator ::: ", shallowCopyZoo);
console.log(zoo.animals == shallowCopyZoo.animals); //true

//using "Object.assign(target,source)" method :::

//target -> inside which key,value is copied
//source -> from where key,value is copied
let shallowCopyZooUsingAssign = Object.assign({}, zoo);
//let shallowCopyZooUsingAssign = Object.assign({}, zoo, {name : "Hrishi"}, {age : 25}); 
//we can override the values like this.....

console.log("from Assign method ::: ", zoo);
console.log("from Assign method ::: ", shallowCopyZooUsingAssign);
