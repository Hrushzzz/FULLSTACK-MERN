//type : 1 --> Simple console log :::

// console.log(this);  // output : Browser Window Object Information


//type : 2 --> Simple Function :::

// function test() {
//     console.log(this);  //output : Browser Window Object Information
// }

// test();


//type : 3 --> "this" keyword inside a function inside an Object :::

// const obj1 = {
//     name : "Hrishi",
//     age : 25,
//     fn : function() {
//         console.log(this);   //output : object itself
//         console.log(this.name);   //This way we can access objects elements
//     },
// };

// obj1.fn();


//type : 4 --> "this" keyword inside a nested function inside an Object :::

const obj2 = {
    name : "Nani",
    age : 13, 
    testFn : function f() {
        function g() {
            console.log(this);  //output : Browser Window Object Information
        }
        g();
    }
}

obj2.testFn();