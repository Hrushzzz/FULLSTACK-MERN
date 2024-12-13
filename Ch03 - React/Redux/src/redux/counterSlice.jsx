// Importing Create Slice from redux toolkit
import {createSlice} from "@reduxjs/toolkit";


// Step 1 : Creating a Slice
const counterSlice = createSlice({
    name: "counterSlice",
    initialState: {   // this is "state"
        count: 0,    
        name: "Hrishi",
        age: 25
    },
    //all update logic / updating the state
    reducers:{    // reducers are also called as "actions".
        increment : (state) => {
            state.count = state.count + 1;
        },
        decrement : (state) => {
            state.count = state.count - 1;
        }
    }
})
// In React we used to do the same as : const [count, setCount] = useState(0);

export default counterSlice

// Step 2 : Create a Store and add our Slice to Store --> refer to store.js