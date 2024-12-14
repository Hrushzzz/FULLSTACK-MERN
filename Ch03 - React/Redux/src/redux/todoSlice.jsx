// Importing createSlice from redux toolkit
import {createSlice} from "@reduxjs/toolkit";

// Step 1 : Creating a Slice
const TodoSlice = createSlice({
    name: "todos",   //state
    initialState: {
        todoList: ["task1", "task2"],
        value: ""
    },
    // updating the state
    reducers: {
        setValue: (state, descObj) => {
            console.log("I am a setValue function", descObj);
            state.value = descObj.payload;
            
        },
        addTodo: (state, descObj) => {
            const newTask = descObj.payload;
            const updatedTodo = [...state.todoList , newTask];
            state.todoList = updatedTodo;
            state.value = "";
        }
    }
});

export default TodoSlice

// Step 2 : Create a Store and add our Slice to Store --> refer to store.js