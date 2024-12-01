function prepareIngredients(callback) {
    setTimeout(function() {
        console.log("Ingredients Prepared");
        callback();
    } , 20000);
}

function cookDish(callback) {
    setTimeout(function() {
        console.log("Dish cooked");
        callback();
    } , 10000);
}

function serveDish(callback) {
    setTimeout(function() {
        console.log("Dish served");
        callback();
    } , 5000);
}

function cleanUp(callback) {
    setTimeout(function() {
        console.log("Cleaning Up");
        callback();
    } , 5000);
}

function giveFeedback() {
    setTimeout(function() {
        console.log("Feedback given");
    } , 5000);
}


prepareIngredients(function() {
    cookDish(function() {
        serveDish(function() {
            cleanUp(function() {
                giveFeedback();
            });
        });
    });
});

//This kind of structure is called as "Pyramid of Doom" or "Callback Hell".