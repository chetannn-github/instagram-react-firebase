import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js"
import modalReducer from "./modalSlice.js";
import userReducer from "./userSlice.js"

const appstore = configureStore({
    reducer:{
        auth:authReducer,
        modal:modalReducer,
        user:userReducer
    }
})

export default appstore;