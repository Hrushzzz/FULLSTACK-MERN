import React, { useState } from 'react'

function TemperatureInput({temperature, updateTemperature}) {
    // const [temperature, setTemperature] = useState(0);
    // by LiftingTheStateUp technique, this is moved to its Parent i.e App.jsx
    console.log("temperature input rendered");
  return (
    <>
    <div>
        <label> Enter Temperature
            <input type='number' value={temperature} onChange={(e) => updateTemperature(e.target.value)}/>
        </label>
    </div>
    </>
  )
}

export default TemperatureInput