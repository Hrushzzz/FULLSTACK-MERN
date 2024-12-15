import UserSlice from "../../redux/userSlice";

const actions = UserSlice.actions;

export const fetchUserMiddleware = (param) => {
    return async (dispatch) =>{
        try{
            dispatch(actions.userLoading());
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`)
            const user = await resp.json();
            console.log("user",user);
            dispatch(actions.userData(user));
        }catch(err){
            console.log(err);
            dispatch(actions.userError());
        }
    }
}

// Note ::: To perform aync operations in Redux, we use Middleware as a source of communication
// between our Component and the Slice.

// Syntaxx for using middleware is written in Store.js