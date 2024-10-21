let radiusArr = [2, 3, 4, 5, 6, 7]; // radius of circles

//Calculate the area for each raidus
function calculateArea(arr) {
    let areas = [];
    for (let i = 0 ; i < arr.length ; i++) {
        areas.push(arr[i] * arr[i] * 3.14);
    }
    return areas;
}

//Calculate Diameter of a circle
function calculateDiameter(arr) {
    let diameter = [];
    for (let i = 0 ; i < arr.length ; i++) {
        diameter.push(2 * arr[i]);
    }
    return diameter;
}

//Calculate Circumference of a circle
function calculateCircumference(arr) {
    let circumference = [];
    for (let i = 0 ; i < arr.length ; i++) {
        circumference.push(2 * 2.14 * arr[i]);
    }
    return circumference;
}

let areasArr = calculateArea(radiusArr);
console.log("areas ::: " , areasArr);

let diameterArr = calculateDiameter(radiusArr);
console.log("diameter ::: " , diameterArr);

let circumferenceArr = calculateCircumference(radiusArr);
console.log("circumference ::: " , circumferenceArr);
