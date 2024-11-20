const originalObj = {
    name: "Hrishi",
    age: 25,
    details: {
        hometown: "Kurnool",
    },
    hobbies: ["cricket" , "football" , "movies"]
}


function deepClone(obj) {
    let isArr = Array.isArray(obj);
    let copy = isArr ? [] : {};
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            copy[key] = [...obj][key];
            for (let i = 0 ; i < copy[key].length ; i++) {
                if (copy[key][i] == "object") {
                    copy[key][i] = deepClone(obj[key][i]);
                }
            }
        } else if (typeof obj[key] == "object") {
            copy[key] = deepClone(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    }
    return copy;
}

let deepCopiedObj = deepClone(originalObj);

deepCopiedObj.details.hometown = "Hyderabad";

console.log("originalObj ::: " , originalObj);
console.log("deepCopiedObj ::: " , deepCopiedObj);