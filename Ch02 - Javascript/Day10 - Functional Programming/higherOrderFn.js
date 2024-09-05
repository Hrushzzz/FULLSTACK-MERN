//using Higher Order Functions to solve the example Problem

// Higher Order function is a function that takes function as an Argument ,
// and whatever function we are passing as a Argument, that is called as a Callback.

let radiusArr = [2, 3, 4, 5, 6, 7]; // radius of circles

//Calculate the area for each raidus

function calculate(arr , cb) {        //this is a higher order function
    let result = [];
    for (let i = 0 ; i < arr.length ; i++) {
        result.push(cb(arr[i]));
    }
    return result;
}

function circleArea(radius) {
    return (radius * radius * 3.14);
}

function circleDiameter(radius) {
    return (2 * radius);
}

function circleCircumference(radius) {
    return (2 * radius * 3.14);
}

let areas = calculate(radiusArr, circleArea);
let diametres = calculate(radiusArr, circleDiameter);
let circumferences = calculate(radiusArr, circleCircumference);

console.log("areas ::: " , areas);
console.log("diametres ::: " , diametres);
console.log("circumferences ::: " , circumferences);