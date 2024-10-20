// adding two numbers

// function add(a,b){
//     return a+b;
// }

// let sum = add(2,4);
// console.log(sum);

// const add = (a,b) => {
//     return a+b;
// }

// let sum = add(2,4);
// console.log(sum);



//type : 1 --> "this" keyword with Normal functions :::

// const obj1 = {
//     name : "Hrishi",
//     age : 25,
//     fn : function() {
//         console.log(this);   //output : object itself
//         console.log(this.name);   //output : Hrishi
//     },
// };

// obj1.fn();


//type : 2 --> "this" keyword with Arrow functions :::

const obj2 = {
    name : "Hrishi",
    age : 25,
    fn1 : () => {
        console.log(this);   //output : {}
        console.log(this.name);  //output : undefined
    },
};

obj2.fn1();