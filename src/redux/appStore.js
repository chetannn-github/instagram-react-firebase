import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js"
import modalReducer from "./modalSlice.js";
import loggedInUserReducer from "./loggedInUserSlice.js"
import profilePageUserReducer from "./profilePageUserSlice.js";
import searchedUserReducer from "./searchedUserSlice.js";


const appstore = configureStore({
    reducer:{
        auth:authReducer,
        modal:modalReducer,
        loggedInUser:loggedInUserReducer,
        profilePageUser:profilePageUserReducer,
        searchedUser:searchedUserReducer
    }
})

export default appstore;