// Normal Function

// function printName(name) {
//     console.log(name);
// }
// printName("Spiderman");



// function printFirstName(firstName) {
//     console.log(firstName);
// }

// function printLastName(lastName) {
//     console.log(lastName);
// }

// printFirstName("Steve");
// printLastName("Rogers");



// Callback function
// A callback function is a function that can be passed as an arguement to another function

function printFirstName(firstName , cb1 , cb2) {
    console.log(firstName);
    cb1("Kesh");    //printLastName
    cb2(25);     //printAge
}

function printLastName(lastName) {
    console.log(lastName);
}

function printAge(age) {
    console.log(age);
}

printFirstName("Hrishi" , printLastName , printAge);
