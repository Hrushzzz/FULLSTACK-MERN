Promise.myAll = function (values) {
    return new Promise(function (resolve, reject) {
      let result = [];
      let total = 0;
      values.forEach(function (item, index) {
        Promise.resolve(item)
          .then(function (res) {
            result[index] = res;
            total++;
            if (total == values.length) {
              resolve(result);
            }
          })
          .catch(function (err) {
            reject(err);
          });
      });
    });
  };
  
  // Test 1: All promises resolve
  let PromisesArr1 = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
  
  Promise.myAll(PromisesArr1)
    .then(function (results) {
      console.log("All resolved ::: ", results);
    })
    .catch(function (err) {
      console.log("Rejected ::: ", err);
    });
  
  // Test 2: Including a promise that rejects
  let PromisesArr2 = [
    Promise.resolve(10),
    Promise.reject(new Error("Failed")),
    Promise.resolve(30),
  ];
  
  Promise.myAll(PromisesArr2)
    .then((results) => console.log("All resolved:", results))
    .catch((error) => console.error("Rejected:", error));
  