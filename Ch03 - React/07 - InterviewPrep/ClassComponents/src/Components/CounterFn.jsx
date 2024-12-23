import React from 'react'
import { useState } from 'react';

function CounterFn() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        let updatedValue = count + 1;
        setCount(updatedValue);
    }

    const handleDecrement = () => {
        if (count <= 0) {
            return;
        }
        // setCount(prevState => prevState - 1);
        setCount(count => count > 0 ? count - 1 : 0);
    }

  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        <h3>Count: {count}</h3>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default CounterFn