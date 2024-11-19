Promise.myAllSettled = function (values) {
    return new Promise(function (resolve, reject) {
      let result = [];
      let total = 0;
      values.forEach(function (item, index) {
        Promise.resolve(item)
          .then(function (res) {
            result[index] = { status: "fulfilled", value: res };
            total++;
            if (total == values.length) {
              resolve(result);
            }
          })
          .catch(function (err) {
            result[index] = { status: "rejected", reason: err };
            total++;
            if (total == values.length) {
              resolve(result);
            }
          });
      });
    });
  };
  
  let PromisesArr1 = [
    Promise.resolve(1),
    Promise.reject(new Error("Failed")),
    Promise.resolve(3),
  ];
  
  let PromisesArr2 = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
  
  Promise.myAllSettled(PromisesArr1)
    .then(function (results) {
      console.log("All settled ::: ", results);
    })
    .catch(function (err) {
      console.log("Rejected ::: ", err);
    });
  