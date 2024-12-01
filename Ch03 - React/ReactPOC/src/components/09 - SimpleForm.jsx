import React, { useState } from 'react'

function SimpleForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    
    const handleName = (value) => {
        setName(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Name is ",name);
        console.log("Email is ", email);

        setName("");
        setEmail("");
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name: </label>
            <input type='text'
            id='name'
            placeholder='Enter Your Name' 
            value={name}
            onChange = { (e) => handleName(e.target.value)}
            //this can also be written as :
            //onChange = { (e) = > setName(e.target.value)}
            />
        </div>

        <div>
            {/* "htmlFor" is used to bind the label with input Element "ID", so both values should be same */}
            <label htmlFor='email'>Email: </label>
            <input type='email' 
            id='email' 
            placeholder='Enter Your Email' 
            value={email}
            onChange = { (e) => setEmail(e.target.value)}
            />
        </div>

        <button type= 'submit'>Submit</button>
    </form>
    </>
  )
}

export default SimpleForm



// Steps to follow ::: 
// 1. Always create a basic UI.
// 2. Create your "States".
// 3. Add Event Listeners and add logic for them.