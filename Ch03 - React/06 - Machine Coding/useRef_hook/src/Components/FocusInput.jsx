// Type 01 ::: Accessing the DOM element using useRef


import {useRef} from 'react'

function FocusInput() {

    // inputRef = {
    //     current: null;
    // }
    const inputRef = useRef(null);   // creates a ref object with a current property initialized to null.
    console.log("inputRef ::: " , inputRef);

    const buttonRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
        // The HTMLElement.focus() method sets focus on the specified element, if it can be focused.
        // The focused element is the element that will receive keyboard and similar events by default.
        buttonRef.current.focus();
    }
    
  return (
    <div>
         <input ref={inputRef} type='text' />    {/*this "ref" attribute is used to attach to our input element */}
         {/* inputRef = {
        current : input
        } */}
        <button ref={buttonRef} onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default FocusInput

// All the elements in HTML has focus() method inbuilt.