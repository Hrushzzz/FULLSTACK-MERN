// Import confiureStore from redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import TodoSlice from "./todoSlice";

// Step 2 : Adding Slice to our Store
const store = configureStore ({
    reducer: {
        counterState: counterSlice.reducer,
        todoState: TodoSlice.reducer,
    }
})

console.log(store);

export default store



// Step 3 : get our Provider and wrap our entire app with Provider --> refer to main.jsx