import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js"
import modalReducer from "./modalSlice.js";

const appstore = configureStore({
    reducer:{
        auth:authReducer,
        modal:modalReducer,
    }
})

export default appstore;