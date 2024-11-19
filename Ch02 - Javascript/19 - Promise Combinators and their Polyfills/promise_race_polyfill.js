Promise.myRace = function (values) {
    return new Promise((resolve, reject) => {
      if (values.length == 0) {
        throw new TypeError("Cannot perform Promise.race on an empty array");
      }
      values.forEach((item, index) => {
        Promise.resolve(item)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    });
  };
  
  let promisesArr = [
    new Promise((resolve) => setTimeout(() => resolve(1), 5000)),
    new Promise((resolve, reject) => setTimeout(() => reject(10), 1000)),
    new Promise((resolve) => setTimeout(() => resolve(100), 2000)),
  ];
  
  Promise.myRace(promisesArr)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  