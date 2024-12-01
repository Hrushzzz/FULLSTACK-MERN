import React from 'react'

function MyComponent({count, msg1, msg2}) {
  return (

    // receiving the data from parent - {props.count}
    <>
      <div>Hello, I am sample component {count} </div>
      <p>{msg1}</p>
      <p>{msg2}</p>
    </>

    //At a time we can return only a single HTML tag,
    //so, we have to wrap them inside <>...</>
    //<>...</> --> this is known as "Fragment".
    
  )
}

export default MyComponent