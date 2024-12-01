// let arr = [1,2,3,4,5];

// let squaredArr = arr.map(function(num) {
//     return num*num;
// });

// console.log(squaredArr);
// console.log(arr);


// Polyfill for ***MAP***

Array.prototype.myMap = function(callback) {
    let resultantArr = [];

    for (let i = 0 ; i < this.length ; i++) {
        resultantArr.push(callback(this[i]));
    }
    //This keyword points to the operational Array
    return resultantArr;  
};

let arrNum = [1 , 2 , 3 , 4 , 5];
let arrNum2 = [5 , 6 , 7 , 8 , 9];
let arrNum3 = [5 , 6 , 7 , 8 , 9];

let squaredArr = arrNum.myMap(function(num) {
    return num * num;
});   //this -> arrNum

let cubedArr = arrNum2.myMap(function(num) {
    return num * num * num;
});   //this -> arrNum2

let numArr = arrNum3.myMap(function(num) {
    return num;
});   //this -> arrNum3


console.log("Squared Array ::: " , squaredArr);
console.log("Cubed Array ::: " , cubedArr);
console.log("num Array ::: " , numArr);

//Note ::: Whenever we are going to use any Array with myMap implementation,
//that particular array is assigned to the "this" keyword.