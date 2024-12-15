import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "userInfo",
    initialState: {
        user: null,
        error: false,
        loading: true,
        param: null
    },
    reducers:{
        userLoading : (state) => {
            state.error = false;
            state.loading =  true;
        },
        userData : (state, descObj) => {
            state.loading =  false;
            state.user = descObj.payload;
        },
        userError : (state) => {
            state.loading =  false;
            state.error = true;
        },
        getParam: (state, descObj) => {
            state.param =  descObj.payload;
        }
    }
})

export default UserSlice