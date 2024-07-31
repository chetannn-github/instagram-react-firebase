import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js"

const appstore = configureStore({
    reducer:{
        auth:authReducer
    }
})

export default appstore;