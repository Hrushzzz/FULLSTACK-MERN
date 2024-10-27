/// Difference between method and a function

let obj = {
    name : 'Steve',
    age : 25,
    printNum : function(){
        console.log(56)
    }
}

// If we are calling with the help of a reference, it is called as a "Method".
obj.printNum(); 


function printNumber(){
    console.log(45)
}

// This is a "Function".
printNumber()  