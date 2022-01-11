import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "../features/userSlice";
import {combineReducers} from 'redux';


export default combineReducers({
        user: useReducer,
});

