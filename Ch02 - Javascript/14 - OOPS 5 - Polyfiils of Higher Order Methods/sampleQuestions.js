// => Q1. Name initials

// const input = "Messi Suarez Neymar";
// output = MSN
 
// const input = "Messi Suarez Neymar";

// const output = input.split(' ').map(function(word){
//     return word[0];
// }).join('');

// console.log(output);

//------------------------------------------------------------------------------------//

// => Q2. Given an array of objects users, print user of particular age along with their frequency.

//   const users=[
//     {firstName:"Lionel",lastName:"Messi",age:37},
//     {firstName:"MS",lastName:"Dhoni",age:43},
//     {firstName:"Prabhas",lastName:"Raju",age:43},
//     {firstName:"Marc",lastName:"Marquez",age:28}, 
//     {firstName:"Louis",lastName:"Hamilton",age:37}, 
//     {firstName:"Travis",lastName:"Head",age:50},
//   ];


// // output: { '28': 1, '37': 2, '43': 2, '50': 1 }


// const ans = users.reduce(function(acc , curr) {
//     if(acc[curr.age]) {
//         acc[curr.age]++;
//     }
//     else {
//         acc[curr.age] = 1;
//     }

//     return acc
// } , {});

// console.log(ans);

//------------------------------------------------------------------------------------//

// Method Chaining

// => Q3. Print the names of students who scored more than 60


// let student = [
//     {name:"Dheeraj",rollNumber:31,marks:80},
//     {name:"Kuldeep",rollNumber:15,marks:69},
//     {name:"Rakesh",rollNumber:16,marks:35},
//     {name:"Hrishi",rollNumber:7,marks:55}
//    ];


//    const results = student.filter(function(obj) {
//     return obj.marks > 60
//    }).map(function(obj){
//     return obj.name;
//    });

//    console.log(results);

//------------------------------------------------------------------------------------//

// => Q4. Given an array of objects users, print fullname.


// const users=[
//     {firstName:"Dheeraj",lastName:"Kohli",age:26},
//     {firstName:"Kuldeep",lastName:"Raina",age:75},
//     {firstName:"Hrishi",lastName:"Messi",age:50},
//     {firstName:"Rakesh",lastName:"Dhoni",age:26},  
//   ];


// const results = users.map(function(obj) {
//     return obj.firstName + " " + obj.lastName;
// });

// console.log(results);

//------------------------------------------------------------------------------------//

// => Q5.Print object having marks greater than 60 and rollNumber greater than 15.

let student = [
    {name:"Dheeraj",rollNumber:31,marks:80},
    {name:"Kuldeep",rollNumber:15,marks:69},
    {name:"Hrishi",rollNumber:16,marks:65},
    {name:"Rakesh",rollNumber:7,marks:55}
   ];


const results = student.filter(function(obj) {
    return obj.marks > 60 && obj.rollNumber > 15
}).map(function(obj) {
    return obj.name;
});

console.log(results);