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

        },
        addTodo: (state, descObj) => {

        }
    }
});

export default TodoSlice

// Step 2 : Create a Store and add our Slice to Store --> refer to store.js