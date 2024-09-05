// get Squares for all the array elements

let numbersArray = [2 , 3 , 4 , 5 , 6 , 7];

//using Normal function
// function calculateSqaure(arr){
//     let sqaureArr = []
//     for(let i=0 ; i<arr.length ; i++){
//         sqaureArr.push(arr[i]*arr[i]);
//     }
//     return sqaureArr;
// }

// let result = calculateSqaure(numbersArray);
// console.log("squaredArray ::: " , result);


// using inbuilt JS "MAP" method
// "map" method can be only used on Arrays
// "map" itself iterates through the entire array , goes through the logic and returns the newly formed result array

function square(num) {
    return num * num;
}

let ans = numbersArray.map(square);
console.log("answerArray ::: " , ans);


//exampleProblem :

// I have Bank Transactions and you have to convert this from usd to inr
const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];
const inrtToUsd = 80;

function convert(amount) {
    return amount * 80;
}

let afterConversion = transactions.map(convert);
console.log("afterConversion ::: " , afterConversion);


//The above code can also be written as :
let conversions = transactions.map(function(amount){
    return amount * 80;
});
console.log(conversions);