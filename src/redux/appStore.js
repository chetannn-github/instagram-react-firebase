import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js"
import modalReducer from "./modalSlice.js";
import loggedInUserReducer from "./loggedInUserSlice.js"
import profilePageUserReducer from "./profilePageUserSlice.js";


const appstore = configureStore({
    reducer:{
        auth:authReducer,
        modal:modalReducer,
        loggedInUser:loggedInUserReducer,
        profilePageUser:profilePageUserReducer
    }
})

export default appstore;