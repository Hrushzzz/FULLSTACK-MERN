import React from 'react'

function DisplayData({shoppingList, user}) {
  return (

    <>
        <div>{shoppingList}</div>

        <div>

            {/* When we are inside a JSX, to loop over anything
            we cannot use a "FOR" loop.
            We can only use MAP , FILTER and REDUCE. */}

            {/* <ul>
                <li>{shoppingList[0]}</li>
                <li>{shoppingList[1]}</li>
                <li>{shoppingList[2]}</li>
                <li>{shoppingList[3]}</li>
                <li>{shoppingList[4]}</li>
            </ul> */}

            {/* Whenever we want to write JS logic inside JSX,
            we should write inside curly braces --> {} */}

            { 
                shoppingList.map(function(item) {
                    return <li>{item}</li>
                })
            }

            {/* JSX can only render Array elements in React, but we cannot render an Object */}

            {/* So, to render an Object we can do this: convert the Object to an Array and then render ::: */}

            {
                // keys ==> ["name", "age", "hobbies"]
                Object.keys(user).map((key) => 
                <>
                    <p>{key}</p>
                    <p>{user[key]}</p>
                </>
                )
            }
            
        </div>
 
    </>
    
  )
}

export default DisplayData