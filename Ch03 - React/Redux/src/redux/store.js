// Import confiureStore from redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import TodoSlice from "./todoSlice";
import UserSlice from "./userSlice";
// import thunkMiddleWare  from "redux-thunk";

// Step 2 : Adding Slice to our Store
const store = configureStore ({
    reducer: {
        counterState: counterSlice.reducer,
        todoState: TodoSlice.reducer,
        userState: UserSlice.reducer
    },
    // middleware: [thunkMiddleWare]
})

console.log(store);

export default store



// Step 3 : get our Provider and wrap our entire app with Provider --> refer to main.jsx