Promise.myAny = function (values) {
    return new Promise(function (resolve, reject) {
      if (values.length == 0) {
        reject(new AggregateError("no promises were provided"));
      }
      let rejections = [];
      let rejectedCount = 0;
      values.forEach((item, index) => {
        Promise.resolve(item)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            //if all the promises are rejected then call reject
            rejections[index] = err;
            rejectedCount++;
            if (rejectedCount == values.length) {
              reject(
                new AggregateError(rejections, "All Promises were rejected")
              );
            }
          });
      });
    });
  };
  
  let promisesArr = [
    Promise.resolve(17),
    Promise.reject("err"),
    Promise.resolve(30),
  ];
  
  let promisesArr2 = [
    new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(10), 500)),
    new Promise((resolve) => setTimeout(() => resolve(100), 2000)),
  ];
  
  Promise.myAny(promisesArr2)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  