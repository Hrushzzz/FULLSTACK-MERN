let car = {
    name: "Mercedes",
    color: "White",
};
  
function buyCar(price) {
    console.log(`I bought a ${this.color} ${this.name} of rupees ${price} `);
};

buyCar.call(car , "50000$");