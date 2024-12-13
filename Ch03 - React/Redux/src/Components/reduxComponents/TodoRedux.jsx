import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import TodoSlice from '../../redux/todoSlice';

const actions = TodoSlice.actions;

function TodoRedux() {

    const { todoList, value } = useSelector((store) => {
      return store.todoState;
    });

    const dispatch = useDispatch();


  return (

    <>
        <h2>Todo</h2>
        <div>
            <div className="inputBox">
                <input type='text' name='' id=''/>
                <button></button>
            </div>
            <div className="list">
                <ul>
                    {
                        list.map((task, idx) => {
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