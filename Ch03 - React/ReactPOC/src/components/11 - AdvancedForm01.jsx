import React, { useState } from 'react'

function AdvancedForm01() {

    const [formData, setFormData] = useState({name: "", email: "", age: null});

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.age) {
            return false;
        }
        //additonal validation logic 
        //when a user signs up , we can keep a check on their age. 
        return true;
    }

    const handleChange = (e) => {
        console.log("handleChange is called" , e.target.id , e.target.value);

        const{id,value} = e.target;
        let updatedObj = {...formData, [id]: value};
        setFormData(updatedObj);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // validate the input before saving data into db
        if (!validateForm()) {
            alert("Form details are invalid");
            return;
        } 

        console.log(`Name: ${formData.name} Email: ${formData.email} Age: ${formData.age}`);
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name: </label>
            <input type='text'
            id='name'
            placeholder='Enter Your Name' 
            value={formData.name}
            onChange = {handleChange}
            />
        </div>

        <div>
            {/* "htmlFor" is used to bind the label with input Element "ID", so both values should be same */}
            <label htmlFor='email'>Email: </label>
            <input type='email' 
            id='email' 
            placeholder='Enter Your Email' 
            value={formData.email}
            onChange = {handleChange}
            />
        </div>

        <div>
            <label htmlFor='age'>Age: </label>
            <input type='number' 
            id='age' 
            placeholder='Enter Your Age' 
            value={formData.age}
            onChange = {handleChange}
            />
        </div>

        <button type= 'submit'>Submit</button>
    </form>
    </>
  )
}

export default AdvancedForm01