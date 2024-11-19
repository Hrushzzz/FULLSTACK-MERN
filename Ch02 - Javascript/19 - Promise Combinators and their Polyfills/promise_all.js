//promise.all --> takes an iterable of promises as input and returns a single promise as output.

// input -> arr of promises
// o/p -> new promise that always resolves
// resolves -> 1. if all promises are fuflfilled -> array with each index containing the result of promise
// 2. if any of the promise gets rejected -> rejection message

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
  

  let allDataPromise = Promise.all([fetchUserData(), fetchUserPosts()]);
  allDataPromise
    .then(function (result) {
      console.log("userData ::: ", result[0]);
      console.log("userPosts ::: ", result[1]);
    })
    .catch(function (err) {
      console.log(err);
    });
  