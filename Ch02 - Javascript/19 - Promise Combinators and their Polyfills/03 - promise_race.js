//Promise.race() --> is a higher-order function that takes an iterable of Promises and returns a new Promise.
// This new Promise settles as soon as one of the input Promises settles, either by fulfilling or rejecting.

//First-Come-First-Serve: The returned Promise will adopt the state (fulfilled or rejected) of the first input Promise to settle.
//Early Termination: Once one Promise settles, the race is over, and the other Promises are ignored.

function quickResolve() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("quickly resolved from quickResolve");
      }, 1000);
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
  
  Promise.race([quickResolve(), slowResolveOrFastReject()])
    .then((result) => {
      console.log("result: ", result);
    })
    .catch((err) => {
      console.log(err);
    });
  
  // Use cases :::
  // Timeouts for Promises: Ensuring that a promise either resolves within a certain time or times out,
  // especially useful for network requests or any operations where a response time guarantee is needed.
  // Responding to User Interaction: Returning the result of whichever user interaction completes first
  // (like clicking a button vs automatic timeout).
  // System Resource Races: Handling scenarios where multiple resources are requested and only the first is needed.
  