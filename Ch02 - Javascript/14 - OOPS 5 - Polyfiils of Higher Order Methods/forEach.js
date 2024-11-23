const names = ["Dhoni" , "Messi" , "Prabhas"];
const numbers = [1, 2, 3, 4];

Array.prototype.myForEach = function(callback) {
    for (let i = 0 ; i < this.length ; i++) {
        callback(this[i]);
    }
};

function printName(name) {
    console.log(name);
}

names.myForEach(printName);

numbers.forEach(function(num) {
    console.log(num);
});

//console.log(Array.prototype);

// We need an array that takes a callback fn and loops through thr Array
//and gets the elements one by one.
