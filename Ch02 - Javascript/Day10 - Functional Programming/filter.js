// MAP works with Arithmetic Operations , where as
// FILTER helps with Logical Conditions

let NumbersArr = [2 , 4 , 7 , 8 , 10 , 11 , 13 , 14 , 17 , 24];

// Using Normal function

// function getEven(arr) {
//     let evenNumArr = [];
//     for (let i = 0 ; i < arr.length ; i++) {
//         if (arr[i] % 2 == 0) {
//             evenNumArr.push(arr[i]);
//         }
//     }
//     return evenNumArr;
// }

// let finalArr = getEven(NumbersArr);
// console.log("finalArr ::: " , finalArr);



//Using "FILTER" higher order method

let evenArr = NumbersArr.filter(function(num) {
    return num % 2 == 0; 
    //if this condition is true , then only it pushes that particular element into the Array  
});
console.log("evenArr ::: " , evenArr);

//The above code can also be written as

function evenNum(num) {
    return num%2 == 0;
}

let evenNumArr = NumbersArr.filter(evenNum);
console.log("evenNumArr ::: " , evenNumArr);

// exampleProblem : Take out only positive elements from the given Array
const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];

let positiveElem = transactions.filter(function(amount) {
    return amount > 0;
});

console.log("positiveNumArray ::: ", positiveElem);

// There are few more inbuilt higher order functions like EVERY , FIND , MAP , REDUCE , FILTER



