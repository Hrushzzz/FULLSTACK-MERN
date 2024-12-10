/*

Prop drilling in React refers to the process of passing data from a parent component 
to a deeply nested child component through multiple intermediate components. 
Each intermediate component acts as a conduit, passing the props down to the next component 
in the hierarchy, even if those intermediates don't use the data themselves.


Prop drilling can make our code:

--> Difficult to manage: It clutters intermediate components with props they don't use.
--> Hard to refactor: Changes in props require updates across multiple components.
--> Error-prone: Passing props through multiple layers can lead to mistakes or missed updates.


Solutions to Avoid Prop Drilling ::

--> Context API: 
Provides a way to share values between components without explicitly passing props.

--> State Management Libraries:
Tools like Redux, MobX, or Zustand provide centralized state management, reducing the need for prop drilling.

--> Custom Hooks:
Abstract logic into reusable hooks that can be accessed where needed, avoiding redundant prop-passing.

--> Component Composition:
Use higher-order components (HOCs) or render props patterns to pass necessary data directly to the child component.
These methods help make your React applications more scalable and easier to maintain.

*/


// Prop Drilling Example :::

import React from 'react'
import { useState } from 'react';

function PropDrilling() {

    const [name,setName] = useState("Hrishi");
    const [age,setAge] = useState(25);

  return (
    <div>
        <h2>Top Level Element</h2>
        <div>⬇️</div>
        <Dummy name={name} age={age}></Dummy>
        <Grandparent name={name} age={age} setName={setName}></Grandparent>
    </div>
  )
}

function Dummy({name,age}) {
    return (
        <>
        <h3>Dummy</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
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

function Parent1({name, age, setName}){
    console.log("Parent1 was rendered");
    return (
    <>
        <h3>Parent1</h3>
        <div>⬇️</div>
        <Parent2 name={name} age={age} setName={setName}></Parent2>
    </>
    )
}

function Parent2({name, age, setName}){
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
    return (
    <>
        <h3 onClick={() => setName("Nani")}>Child</h3>
        <p>Hello my name is {name} and my age is {age}</p>
    </>
    )
}

export default PropDrilling