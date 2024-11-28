import React from 'react'

function ConditionalRendering({isUserLoggedIn , username}) {
    // {isUserLoggedIn , username} ==> this is known as destructuring of Props
  return (

    // Whenever we are doing Conditional Rendering,
    // we have to wrap it inside a "div" or a "fragment".

    <>
    {/* If and Else conditions do not work in JSX,
    so we have to use Ternary Operators. */}
        {
            isUserLoggedIn ?
            (<h1>Welcome, {username}</h1>) :
            (<h1>Please Login to continue</h1>)
        }
    </>
  )
}

export default ConditionalRendering