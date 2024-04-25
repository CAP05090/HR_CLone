import { combineReducers} from "redux";
import * as actionTypes from "./actionTypes"

const initialAuthState = { isAuth: false }

const authReducer = (state = initialAuthState, action) => {
    switch (action.type){
        case actionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                isAuth: true
            };
        case actionTypes.LOGIN_FAILURE:
            return{
                ...state,
                isAuth: false
            };
        default:
            return state;
    }
}
export const rootReducer = combineReducers({
    auth: authReducer
})