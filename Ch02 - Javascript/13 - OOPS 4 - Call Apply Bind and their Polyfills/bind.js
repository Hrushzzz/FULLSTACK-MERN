const car1 = {
    name : "BMW",
    YOM : 2023,
    color : "Blue",

    drive : function(){
        console.log(`Driving a ${this.color} ${this.name}`);
    }
};

const car2 = {
    name : "Ferrari",
    YOM : 2024,
    color : "Red", 
};

const car3 = {
    name :"Mercedes",
    YOM : 2022,
    color : "White"
};


//console.log(car1.drive.bind(car2));
let driveCar2 = car1.drive.bind(car2);
let driveCar3 = car1.drive.bind(car3);

///// 1000 lines of code in between

driveCar2();
driveCar3();

