//Deep copy --> it copies Primitive and Non-primitive datatypes at all levels and no referencing.

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

let deepCopyZoo = JSON.parse(JSON.stringify(zoo));
deepCopyZoo.animals[0].species = "Tiger";

console.log(zoo);
console.log(deepCopyZoo);
console.log(zoo.animals == deepCopyZoo.animals);  //false


// Why "Stringify + Parse" is not a good way ?
// 1. It is very expensive, resource intensive and takes high Time Complexity.
// 2. Functions, Dates and undefined data is lost. They can't be converted into String format.


// *** Best way to "DEEP COPY" :::
// ans: using 3rd party libraries like --> "lodash" --> ".cloneDeep" method.

