import { configureStore } from "@reduxjs/toolkit";
import DeptReducer from "../reducers/DeptReducer";
import UserReducer from "../reducers/UserReducer";

const reducer = {
    user : UserReducer,
    dept : DeptReducer
}

const store = configureStore({
    reducer 
})


export default store






































