import React from 'react';
import { useState, useMemo } from 'react';

const generateLargeArray = () => {
    const largeArray = [];
    for(let i = 0 ; i < 100000 ; i++) {
        largeArray.push(i);
    }
    return largeArray;
}

const sumArray = (arr) => {
    console.log("Calculating sum....");
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function UseMemo() {
    // console.time();
    const [count, setCount] = useState(0);
    // const largeArray = generateLargeArray();
    // const sum = sumArray(largeArray);
    // console.timeEnd();

    // We are repeating "generateLargeArray()" function everytime, so we wrap it inside "useMemo".
    console.time();
    const largeArray = useMemo(() => generateLargeArray(), []);   //[] -> useEffect type-2
    const sum = useMemo(() => sumArray(largeArray), [largeArray]);
    console.timeEnd();


  return (
    <div>
        <h1> Sum: {sum} </h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <p>Count: {count}</p>
    </div>
  )
}

export default UseMemo