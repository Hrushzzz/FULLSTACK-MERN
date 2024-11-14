//Whenever we create our own promise, and try to return it ,
// the async function will return the output in pending state
//it is in our hand , when to resolve it.

const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("resolved in 3 sec");
    }, 3000);
  });
  
  async function getData() {
    return p1; //returning a promise
  }
  
  const dataPromise = getData();
  console.log(dataPromise);
  
  // and we have to call "then" function to get its output
  dataPromise.then(function (result) {
    console.log(result);
  });  