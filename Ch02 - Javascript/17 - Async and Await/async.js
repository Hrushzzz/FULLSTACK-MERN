const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("resolved in 3 sec");
    }, 3000);
  });
  
  function getData() {
    p1.then(function (result) {
      console.log("from getData ::: ", result);
    });
  
    console.log("Messi forever..!");
  }
  
  //the "getData()" function can also be written as :::
  async function handlePromise() {
    const val = await p1; //just have to pass which promise we want to resolve along with "await" method
    console.log("from handlePromise ::: ", val);
    console.log("MS Dhoni forever..!");
  }
  
  // getData();
  handlePromise();
  
  // NOTE : "await" is only valid inside a "async" function,
  // We cannot use "await" outside "async" function.
  