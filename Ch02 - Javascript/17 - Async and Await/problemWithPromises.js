function prepareIngredients() {
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log("Ingredients Prepared");
            resolve();
        } , 20000);
    });
}

function cookDish() {
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log("Dish cooked");
            resolve();
        } , 10000);
    });
}

function serveDish() {
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log("Dish served");
            resolve();
        } , 5000);
    });
}

function cleanUp() {
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log("Cleaning Up");
            resolve();
        } , 5000);
    });
}

function giveFeedback() {
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log("Feedback given");
            resolve();
        } , 5000);
    });
}

prepareIngredients()
.then(cookDish)
.then(serveDish)
.then(cleanUp)
.then(giveFeedback)
.catch(function(err) {
    console.log(err);
});