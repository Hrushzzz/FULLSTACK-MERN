//creating a new Promise

const coinTossPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      const isHeads = Math.random() > 0.5;
      if (isHeads) {
        resolve("Heads is the output");
      } else {
        reject("Tails is the output");
      }
    }, 2000);   //simulate a 2 sec coin toss
  });
  
  // console.log(myPromise);   
  
  //***then and catch methods***

  // myPromise.then(result => console.log(result));
  // myPromise.catch(error => console.log(error));
  
  coinTossPromise.then(function (result) {
    console.log(result);
  });    //then works with "resolve"
  
  coinTossPromise.catch(function (error) {
    console.log(error);
  });    //catch works with "reject"