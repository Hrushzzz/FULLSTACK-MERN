const originalObj = {
    name: "Hrishi",
    age: 25,
    details: {
      hometown: "Kurnool",
      favColor: "Black",
    },
    hobbies: ["cricket", "football", "movies"],
    // greet() {
    //     console.log(`Hello, my name is ${this.name}!`);
    // }
  };
  
  function deepClone(obj) {
    const isArray = Array.isArray(obj);
    let cloning = isArray ? [] : {};
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {   // prop is a part of object and not of prototype or inherited.
        if (typeof obj[prop] === "object") {
          cloning[prop] = deepClone(obj[prop]);
        } else {
            cloning[prop] = obj[prop];
        }
      }
    }
    return cloning;
  }
  
let deepCopiedObj = deepClone(originalObj);

console.log("originalObj ::: ", originalObj);

console.log(deepCopiedObj == originalObj);
deepCopiedObj.details.hometown = "Hyderabad";
console.log("deepCopiedObj ::: ", deepCopiedObj);