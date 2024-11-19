//Promise.any() --> it is designed to handle scenarios where you have multiple Promises
//and you want the first one to resolve. It's essentially a race condition for Promises,
//where the first Promise to settle (either resolve or reject) determines the outcome.

function quickResolve() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("quickly resolved from quickResolve");
      }, 3000);
    });
  }
  
  function slowResolveOrFastReject() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("quickly resolved from slowResolveOrFastReject");
      }, 2000);
      setTimeout(() => {
        reject(new Error("quickly rejected"));
      }, 5000);
    });
  }
  
  Promise.any([quickResolve(), slowResolveOrFastReject()])
    .then((result) => {
      console.log("result: ", result);
    })
    .catch((err) => {
      console.log(err);
    });
  
  // use cases :::
  // Fetching Redundant Resources: Loading the same resource from multiple sources
  //or mirrors and using the first successful load.
  // Service Availability: Sending requests to multiple services or endpoints
  //where you only need a response from one to proceed.
  // Competitive Conditions: Handling scenarios where multiple potential sources of data or actions
  // are available, and only the fastest (first successful) is needed.
  