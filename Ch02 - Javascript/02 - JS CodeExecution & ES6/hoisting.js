
//Hoisting is the concept of moving the Function invocation to the top

let a = 17;

let test = function(){
    console.log('This is the Hoisting log');
}
console.log(a);

test();