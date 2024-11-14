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


async function executeTasks() {
    await prepareIngredients();   // 20 sec
    await cookDish();   // 10 sec
    await serveDish();   // 5 sec
    await cleanUp();   // 5 sec
    await giveFeedback();   // 5 sec
}

executeTasks();