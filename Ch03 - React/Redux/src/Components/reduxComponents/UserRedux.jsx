import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import UserSlice from '../../redux/userSlice';
import { fetchUserMiddleware } from './userMiddleware';
const actions = UserSlice.actions;

function UserRedux() {

    const [value, setValue] = useState();

    const { loading, error, user, param} = useSelector((store) => {
        return store.userState;
    });

    const dispatch = useDispatch();

    useEffect(()=>{
        if(param != null){
            dispatch(fetchUserMiddleware(param));
        }
    },[param]);


    const handleParam = () => {
        dispatch(actions.getParam(value))
    }

    const heading = <>
        <h2>User Example</h2>
        <input type = "text"
                value = {value}
                onChange = {(e) => { setValue(e.target.value) }} />
        <button onClick = {handleParam}> send Param </button>
    </>


    if (loading) {
        return <> {heading}
            <h3>...Loading</h3>
        </>
    }
    //if error 
    if (error) {
        return <> {heading}
            <h3>Error occurred</h3>
        </>
    }
    return (
        <>
            {heading}
            <h4>Name: {user.name}</h4>
            <h4>Phone: {user.phone}</h4>
        </>
    )
}

export default UserRedux