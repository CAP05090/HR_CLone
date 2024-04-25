import * as actionTypes from "./actionTypes"
import axios from "axios"

export const loginSuccess = ()=> ({
    types: actionTypes.LOGIN_SUCCESS
});
export const loginFailure = (error)=>({
    type: actionTypes.LOGIN_FAILURE,
    payload: error
});

export const loginDetails = (email, password) =>{
    return async(dispatch) =>{
        try {
            const response = await axios.post("https://reqres.in/api/login", {email, password})
            const data = await response.json();
            console.log(data)
            if (data.token){
                dispatch(loginSuccess())
            } else {
                dispatch(loginFailure("Invalid Email or Password"))
            }
        } catch (error) {
            dispatch(loginFailure(error.message))
        }
    }
}