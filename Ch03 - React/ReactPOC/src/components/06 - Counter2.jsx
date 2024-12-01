import React from 'react'

function Counter2({count}) {
    const handleIncrement = () => {
        // I cannot change the prop because there's no function to update it's state .
    }
    console.log("I am also re-rendered");

  return (

    <div>
        <h1 onClick={handleIncrement}>Product Quantity: {count}</h1>
    </div>

  )
}

export default Counter2