// let arrNum = [1 ,2 ,4 ,8 ,9, 12 , 14, 17];

// let evenArray= arrNum.filter(function(num){
//     return num % 2 == 0;
// });

// console.log("Even Array ::: " , evenArray);


// Polyfill for ***FILTER***

Array.prototype.myFilter = function(callback) {
    let resultantArr = [];

    for (let i = 0 ; i < this.length ; i++) {
        if (callback(this[i])) {
            resultantArr.push(this[i]);
        } 
    }
    return resultantArr;
}

let numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

let evenNums = numbers.myFilter(function(num) {
    return num % 2 == 0;
});

let oddNums = numbers.myFilter(function(num) {
    return num % 2 != 0;
});

console.log("Even Numbers ::: " , evenNums);
console.log("Odd Numbers ::: " , oddNums);


