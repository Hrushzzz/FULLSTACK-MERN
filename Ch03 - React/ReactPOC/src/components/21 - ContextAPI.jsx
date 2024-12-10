/*
The Context API in React is a built-in feature used for managing and sharing state or data 
across a component tree without having to pass props manually at every level. 

It is particularly useful for avoiding prop drilling, where data needs to be passed down 
through multiple layers of intermediate components that don’t use the data themselves.
*/

import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

// creates a store -> storeApnaBazaar is the name of the store.
// createContext("default-value")  --> used to create the context.
const storeApnaBazar = createContext("default-value");
console.log(storeApnaBazar);
//stock up the store -> put data inside store
const data = {
    rice: "10kg",
    wheat: "20kg",
    sugar: "30kg"
}

function ContextAPI() {

    const [name,setName] = useState("Hrishi");
    const [age,setAge] = useState(25);

  return (
    <div>
        <h2>Top Level Element</h2>
        <div>⬇️</div>
        <storeApnaBazar.Provider value={data}>
            <Dummy name={name} age={age}></Dummy>
            <Grandparent name={name} age={age} setName={setName}></Grandparent>
        </storeApnaBazar.Provider>
        {/* This means it provides access to components and the following component's children 
        which are wrapped inside storeApnaBazar */}
        {/* .Provider value={data} --> this means it can provide the data passed over here */}
    </div>
  )
}

function Dummy({name,age}) {

    const items = useContext(storeApnaBazar);  // "useContext" is used to access the Store.

    return (
        <>
        <h3>Dummy</h3>
            {/* <p>Name: {name}</p>
            <p>Age: {age}</p> */}
            <p>Wheat: {items.wheat}</p>
            <p>Sugar: {items.sugar}</p>
        </>
    )
}

function Grandparent({name, age, setName}) {
    console.log("Grandparent was rendered");
    return (
    <>
        <h3>GrandParent</h3>
        <div>⬇️</div>
        <Parent1 name={name} age={age} setName={setName}></Parent1>
    </>
    )
}

function Parent1({name, age, setName}) {
    console.log("Parent1 was rendered");
    return (
    <>
        <h3>Parent1</h3>
        <div>⬇️</div>
        <Parent2 name={name} age={age} setName={setName}></Parent2>
    </>
    )
}

function Parent2({name, age, setName}) {
    console.log("Parent2 was rendered");
    return (
    <>
        <h3>Parent2</h3>
        <div>⬇️</div>
        <Child name={name} age={age} setName={setName}></Child>
    </>
    )
}

function Child({name, age, setName}) {
    console.log("Child was rendered");

    const items = useContext(storeApnaBazar);   // "useContext" is used to access the Store.

    return (
    <>
        {/* <h3 onClick={() => setName("Nani")}>Child</h3>
        <p>Hello my name is {name} and my age is {age}</p> */}
        <h3>Child</h3>
        <p>Rice: {items.rice}</p>
        <p>Wheat: {items.wheat}</p>
        
    </>
    )
}

export default ContextAPI