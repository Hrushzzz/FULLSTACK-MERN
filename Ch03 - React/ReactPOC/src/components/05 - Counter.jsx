import React, { useState } from 'react'
import Counter2 from './06 - Counter2';

function Counter() {

    //returns an array, variable, function
    //length of array in useState() is always 2. arr[0] -> initial value , arr[1] -> function().

    //initial state
    // const arr = useState(0);  // whatever value we give inside useState, that will be in index 0.
    // console.log(arr);   //returns an array with arr[0] = 0 and arr[1] = function() --> [0, ƒ].
    // const count = arr[0];   //storing initial value of state
    // //count = count + 1;    // this is not allowed in react
    // //function helps us to update our state
    // const setCount = arr[1];

    console.log("component is re-rendered");
    const [count, setCount] = useState(0);

    const handleIncrement = function() {
        console.log("going to increment by 1");
        setCount(count+1);
    }

    const handleDecrement = () => {
        console.log("going to decrement by 1");
        if (count <= 0) {
            return;
        }
        setCount(count-1);
    }

    const handleReset = () => {
        console.log("resetting the count");
        setCount(0);
    }

  return (

    <>
        <div style = {{display: "flex" , gap: "2rem"}}>
            <button onClick={handleDecrement}>-</button>
            {/* If we have to write some JS inside html, we have to use {} */}
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>Reset</button>
        </div>

        <Counter2 count = {count}></Counter2>
    </>
    
  )
}

export default Counter



// In normal JS, we can directly alter the DOM: 

// const paraEle=document.querySelector(".para");
// const incrementBtn =  document.querySelector(".plus");
// const decrementBtn =  document.querySelector(".minus");

// incrementBtn.addEventListener("click",()=>{
//     let count=paraEle.textContent;
//     paraEle.textContent=count+1
// })

// decrementBtn.addEventListener("click",()=>{
//     let count=paraEle.textContent;
//     paraEle.textContent=count-1
// })