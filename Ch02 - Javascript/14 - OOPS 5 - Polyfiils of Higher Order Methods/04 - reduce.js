// let nums = [1 , 2 , 3 , 4 , 5 , 6 , 7];

// let sum = nums.reduce(function(acc , num) {
//     acc = acc + num;
//     return acc;
// }, 0);

// console.log("sum ::: " , sum);


// Polyfill for ***REDUCE***

Array.prototype.myReduce = function(cb , initialValue) {
    let accumulator = initialValue;
    let firstIndex = 0;

    if (arguments.length === 1) {
        accumulator = this[0];
        firstIndex = 1;
    }

    for (let i = firstIndex ; i < this.length ; i++) {
        accumulator = cb(accumulator , this[i]);
    }
    return accumulator;
}

let arr2 = [1 , 2 , 3 , 4 , 5];

let totalSum = arr2.myReduce(function(acc , num) {
    return acc + num;
} , 0);

console.log(totalSum);