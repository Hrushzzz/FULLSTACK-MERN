const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("P1 resolved in 2 sec");
    }, 2000);
  });

  const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("P2 resolved in 6 sec");
    }, 6000);
  });
  
  //the "getData()" function can also be written as :::
  async function handlePromise() {
    console.log("Hi");
    const val1 = await p1; //just have to pass which promise we want to resolve along with "await" method.
    //"await" keyword will suspend the call for operation to complete.
    console.log("val1 from handlePromise ::: ", val1);
    //console.log("MS Dhoni forever..!");

    const val2 = await p2;
    console.log("val2 from handlePromise ::: ", val2);

    //Overall , val1 and val2 will be executed in 6 sec
  };

  
handlePromise();

//   function getData() {
//     p1.then(function (result) {
//       console.log("from getData ::: ", result);
//     });
  
//     console.log("Messi forever..!");
//   };

//getData();
  

  // NOTE : "await" is only valid inside a "async" function,
  // We cannot use "await" outside "async" function.

  //async and await always works sequentially.
  