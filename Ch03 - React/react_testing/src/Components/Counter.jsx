import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    
    const incCount = () => {
        setCount(count+1);
    }
    const decCount = () => {
        setCount(count-1);
    }
  return (
    <div>
        <button onClick={incCount}>+</button>
        <h2>Count is {count}</h2>
        <button onClick={decCount}>-</button>
    </div>
  )
}

export default Counter