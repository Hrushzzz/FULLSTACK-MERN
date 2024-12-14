import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import TodoSlice from '../../redux/todoSlice';

const actions = TodoSlice.actions;

function TodoRedux() {

    const { todoList, value } = useSelector((store) => {
      return store.todoState;
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const updatedValue = e.target.value;
        dispatch(actions.setValue(updatedValue));
    }

    const handleSubmit = () => {
        dispatch(actions.addTodo(value));
    }


  return (

    <>
        <h2>Todo</h2>
        <div>
            <div className="inputBox">
                <input type='text' value={value} onChange={handleChange}/>
                <button onClick={handleSubmit}>Add</button>
            </div>
            <div className="list">
                <ul>
                    {
                        todoList.map((task, idx) => {
                            return <li key={idx}> {task} </li>
                        })
                    }
                </ul>
            </div>
        </div>
    </>

  )
}

export default TodoRedux