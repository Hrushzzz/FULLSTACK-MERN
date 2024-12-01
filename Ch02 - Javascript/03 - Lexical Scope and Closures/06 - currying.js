// Currying - It is one of the applications of Closures, whenever you create a function pass one arg to it at a time.

//------------------------------------------------------------------------------------//

// adding 3 numbers :::

// => Using normal function ::: 

// function add(a, b, c) {
//     console.log("sum ::: " , a + b + c);
// }

// add(1,2,3);


// ==> Using "CURRYING" ::: 

// function fn1(a) {
//     return function fn2(b) {
//         return function fn3(c) {
//             return a + b + c;
//         }
//     }
// } 

// let sum = fn1(1)(2)(3);
// console.log("sum ::: " , sum);

//------------------------------------------------------------------------------------//

// => example:  Add 2 to every argument and then sum everything

// function add2(a) {
//     a = a + 2;
//     return function fn1(b) {
//         b = b + 2;
//         return function fn2(c) {
//             c = c + 2;
//             return function fn3(d) {
//                 d = d + 2;
//                 return function sum() {
//                     return a + b + c + d;
//                 }
//             }
//         }
//     }
// }

// let sum = add2(1)(2)(3)(4)();
// console.log("sum ::: " , sum);

//------------------------------------------------------------------------------------//

// => example:
// calculate('sum')(3)(4) -> 7
// calculate('substrat')(5)(2) -> 3
// calculate('multiply')(3)(4) -> 12
// calculate('divide')(8)(4) -> 2


// ==> Using "CURRYING" ::: 

// function calculate(operation) {
//     return function(a) {
//         return function(b) {
//             if (operation === "sum") {return a + b}
//             else if (operation === "subtract") {return a - b}
//             else if (operation === "multiply") {return a * b}
//             else if (operation === "divide") {return a / b}
//             else {return ("Invalid Operation")}
//         }
//     }
// }

// let answer = calculate("multiply")(4)(5);
// console.log("answer ::: " , answer);

//------------------------------------------------------------------------------------//

//  "Infinite Currying" :::

// Write an add function which can add values like this : 
// add(2)(3)(4)(5)(6)(7)(8)...........()


// function add(a) {
//     return function(b) {
//         if(b) {
//             return (add(a+b));
//         }
//         return a;
//     }
// }

// let sum = add(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)();
// console.log("sum ::: " , sum);

//------------------------------------------------------------------------------------//

// ==> Partial Application :::
// We can pass any number of arguments to any function.

function addPartial(a,d) {
    return function(b , c) {
       return function(f, g ,h) {
        return a+b+c+d+f+g+h;
       }
    }
}

let sum = addPartial(1 ,2)(3 ,4)(4,5,6);
console.log("addPartialSum ::: " , sum);