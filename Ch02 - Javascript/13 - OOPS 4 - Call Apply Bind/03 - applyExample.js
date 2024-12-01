let arr = [10 ,20 ,5 , 8 , 25 , 40 , 2];

let maxNum = Math.max.apply(null, arr);

console.log(maxNum);

//In case of Dynamically increasing data , "apply" method is more useful.
//In call, apply and bind, the first argument should always refer to an object
//If we do not have any object as the first parameter , it is suggested to pass null.