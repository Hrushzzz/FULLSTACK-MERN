// Promise.allSettled -> waits for all the promises to either resolve or reject
//and then resolves with an array of objects represeting the outcome of each promise.
//useful when u need all promises to be completed(settled) regardless of their individual success or failure

// input -> arr of promises.
// o/p -> new promise that always resolves.
// resolves -> array of objects . each objects represents the result of each promise.
//status: fulfilled with a Value (or) status: rejected with a reason.

function fetchUserData() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({ userId: 1, userName: "Hrishi" });
      }, 2000);
    });
  }
  
  function fetchUserPosts() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(["Post 1", "Post 2", "Post 3"]);
        //reject("fetchUserPosts rejected : data could not be fetched");
      }, 1000);
    });
  }
  
  let failedPromises = [];
  let promiseArr = [fetchUserData(), fetchUserPosts()];
  console.log("promiseArray ::: ", promiseArr);
  Promise.allSettled(promiseArr).then((results) => {
    results.forEach((result, index) => {
      if (result.status == "fulfilled") {
        console.log("resultValue ::: ", result.value);
      } else if (result.status == "rejected") {
        console.log("resultReason ::: ", result.reason);
        failedPromises.push(promiseArr[index]);
      }
    });
    console.log("failed Promises ::: ", failedPromises);
  });
  
  // Usecase :  Data Loading : 5 sources . and if data of 1 sources is blocked . show data from other 4 sources.
  