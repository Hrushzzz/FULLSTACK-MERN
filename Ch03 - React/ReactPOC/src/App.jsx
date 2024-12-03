import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//We have to import Child components in order to use them
import MyComponent from './components/01 - MyComponent'
import DisplayData from './components/02 - DisplayData'
import ConditionalRendering from './components/03 - ConditionalRendering'
import EventHandling from './components/04 - EventHandling'
import Counter from './components/05 - Counter'
import SimpleForm from "./components/09 - SimpleForm";
import AdvancedForm01 from "./components/11 - AdvancedForm01";
import AdvancedForm02 from './components/12 - AdvancedForm02'
import TemperatureInput from './components/13 - TemperatureInput'
import TemperatureDisplay from './components/14 - TemperatureDisplay'

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
  let username = "Hrushikesh";

  const [temperature, setTemperature] = useState(0);
  const updateTemperature = (value) => {
    console.log("temperature state is changed in App");
    setTemperature(value);
  }

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

      {/* <SimpleForm></SimpleForm> */}

      {/* <AdvancedForm01></AdvancedForm01> */}

      {/* <AdvancedForm02></AdvancedForm02> */}

      <TemperatureInput temperature={temperature} updateTemperature = {updateTemperature}></TemperatureInput>
      <TemperatureDisplay temperature={temperature}></TemperatureDisplay>
    </>
  )
}

export default App
