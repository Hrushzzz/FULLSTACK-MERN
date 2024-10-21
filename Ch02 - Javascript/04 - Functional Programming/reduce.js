// REDUCE gives us a single result

let numbersArr = [1 , 2 , 3 , 4 , 5 , 6 , 7];

// Calculate the sum of all the array elements

//Normal method ::: 
function sumOfAll(arr) {
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        sum += arr[i];
    }
    return sum;
}

let total = sumOfAll(numbersArr);
console.log("total ::: " , total);


//solving the above problem using "REDUCE" higher order method ::: 

let sumFromReduce = numbersArr.reduce(function(acc , num) {
    acc = acc + num;    //acc is known as accumulator , where the value should start from
    return acc;    
} , 0);    // here we passed 0 as a accumulator , as the sum initially starts from zero

console.log("sumFromReduce ::: " , sumFromReduce);

//The above program can also be written as :::

function sum(acc , numb) {
    acc = acc + numb;
    return acc;
}

let sumReduce = numbersArr.reduce(sum , 0);
console.log("sumReduce ::: " , sumReduce);


//exampleProblem : find the product of all elements from the numbersArr array

let productFromReduce = numbersArr.reduce(function(acc , num) {
    acc *= num;
    return acc;
} , 1);

console.log("productFromReduce ::: " , productFromReduce);

