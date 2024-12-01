//If we return any async function, its output will be a promise,
// i.e its output will be wrapped inside a promise, it can be a
//either a String / Integer / boolean / any other data type.

//async function tries to resolve the promise automatically

// Async always tries to return a fulfilled promise first.

async function getData() {
    return "Messi";
  }
  
  let data = getData();
  console.log(data);
  
  // This is how a "async" function should be called
  async function myData2() {
    return "Barcelona";
  }
  
  let dataPromise = myData2();
  console.log(dataPromise);
  dataPromise.then(function (result) {
    console.log(result);
  });