import useReducer  from "../features/userSlice";
import {combineReducers} from 'redux';


const rootReducer =  combineReducers({
        user: useReducer,
});
export default rootReducer;

