import React from 'react'

function EventHandling() {

    const handleClick = () => {
        console.log("I am Clicked broo..");
    }
    
  return (
    <button onClick={handleClick}>Click Me..</button>
  )
}

export default EventHandling

// const btn = document.querySelector("button");
// btn.addEventListener("click" , function() {
//     console.log("I was clicked...!")
// })