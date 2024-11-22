// example : arr=[1,2,3,[4,5,[6,7,8]]] ----> [1,2,3,4,5,6,7,8]

let arr=[1,2,3,[4,5,[6,7,8,[9,10,[11,12]]]]];

//let arr = [1,2,3,[4,5]];

function flattenArray(arr) {
    let flattenedArr = [];

    for (let i = 0 ; i < arr.length ; i++) {
        let ele = arr[i];
        if (Array.isArray(ele)) {
            let smallFlattenedArr = flattenArray(ele);
            // console.log(smallFlattenedArr);
            flattenedArr.push(...smallFlattenedArr);
        } else {
            flattenedArr.push(arr[i]);
        } 
    }
    return flattenedArr;
}

let flattenedArr = flattenArray(arr);
console.log("flattenedArray ::: " , flattenedArr);


// Q. -> flatten upto a particular level.   n=3
// input -> [1,2,3,[4,5,[6,7,8,[9,10,[11,12]]]]];
// output -> [1,2,3,[4,5,6,7,8,9,10,11,12]];



// Q. -> flatten an object

//input ->
// let dog={
//     fName:"Tommy",
//     breed:"labrador",
//     address:{
//         street: {"name":"Vasant Vihar",number:4},
//         city:"New Delhi"
//     }
// }

// output ->
// let dog={
//     "fName":"Tommy",
//     "breed":"labrador",
//     "address.street.name":"Vasant Vihar",
//     "address.street.number":4,
//     "address.city":"New Delhi"
// }