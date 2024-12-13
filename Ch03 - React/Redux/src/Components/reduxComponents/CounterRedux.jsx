import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import counterSlice from '../../redux/counterSlice';
console.log(counterSlice);

const actions = counterSlice.actions;

function CounterRedux() {

  // useSelector() hook --> it is used to access the store.
    const {count , name , age} = useSelector((store) => {return store.counterState });
    // Here, we get access to our initial state in our stateObject.
    
  // useDispatch() hook --> it is used to update the state
    const dispatch = useDispatch();

    const handleIncrement = () => {
        console.log("increment will happen");
        dispatch(actions.increment());
        
    }
    const handleDecrement = () => {
        console.log("decrement will happen");
        dispatch(actions.decrement());
    }

  return (

    // 3. UI : It is the html that will render UI 
    <div>
        <h1>Counter</h1>
        <button onClick={handleDecrement}>-</button>
        <p>{count}</p>
        <button onClick={handleIncrement}>+</button>
    </div>

  )
}

export default CounterRedux