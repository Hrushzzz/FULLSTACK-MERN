import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//We have to import Child components in order to use them
import MyComponent from './components/myComponent'
import DisplayData from './components/DisplayData'
import ConditionalRendering from './components/ConditionalRendering'
import EventHandling from './components/EventHandling'
import Counter from './components/Counter'
import { SimpleForm } from "./components/SimpleForm";

function App() {
  const [count, setCount] = useState(0)

  // Props ::: Props helps us to send data from Parent to Child component.
  // JSX is the part after "return" keyword.

  const fruits = ["Apple", "Grapes", "Mango", "Banana", "Cherry"];

  const person = {
    name: "Hrishi",
    age: 25,
    hobby: "acting like Spiderman"
  }

  let isUserLoggedIn = true;
  let username = "Hrushikesh"

  return (
    <>
      {/* <h1>My first REACT project..!</h1>
      <h3>Hrishi - come FLY with me</h3> */}

      {/* sending a data from parent child - count = {count} */}

      {/* <MyComponent count = {count} msg1 = {"Welcome Home Spiderman"} msg2 = {"You gotta save the world..!"}/>  
      <MyComponent count = {100} msg1 = {"Welcome Home Batman"} msg2 = {"You gotta fight the Demons..!"}/>
      <MyComponent count = {1000}/> */}

      {/* <DisplayData shoppingList = {fruits} user = {person}></DisplayData> */}
      
      {/* After passing the Props from App.jsx, we have to destructure them in the Child component */}
      {/* <ConditionalRendering isUserLoggedIn = {isUserLoggedIn} username = {username}></ConditionalRendering> */}
      {/* <EventHandling></EventHandling> */}

      {/* <Counter></Counter> */}

      <SimpleForm></SimpleForm>
    </>
  )
}

export default App
