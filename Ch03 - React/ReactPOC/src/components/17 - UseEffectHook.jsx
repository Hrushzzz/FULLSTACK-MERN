import React, { useEffect, useState } from 'react'

function UseEffectHook() {

    const [count , setCount] = useState(0);
    const [name , setName] = useState("");

    // first variation ::
    useEffect(() => {
        //called when component is rendered(mounted) for the first time and everytime when state changes.
        console.log("I am useEffect 01");
        
    });

    // second variation :: "with empty dependency Array"
    useEffect(() => {
        //called when component is rendered(mounted) for the first time.
        console.log("I am useEffect 02");
        
    }, []);

    // third variation :: "with !empty dependency Array"
    useEffect(() => {
        //called when component is rendered(mounted) and everytime when count state changes
        console.log("I am useEffect 03");
    }, [count]);   //we can add multiple states in the array. eg: [count, name]

    // fourth variation + clean up ::
    useEffect(() => {
        console.log("I am useEffect 04");
        //I have made a network request that takes 5 seconds
        let timerId = setTimeout(() => {
            console.log("Network response from Server useEffect 4", count);
            
        }, 5000);
        //just before next useEffect is called, cleanup function is called first.
        return () => {
            //remove event listensers after previous is removed and before next button is created
            console.log("cleanUp before useEffect 4 is called");
            clearTimeout(timerId);
        }
    }, [count]);

    console.log("UI is rendered..!");

  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick = {() => setCount(count + 1)}>Click me..!</button>

        <p>My name is {name}</p>
        <button onClick = {() => setName("Hrishi")}>Reveal Name..!</button>
    </div>
  )
}

export default UseEffectHook