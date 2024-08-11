import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js"
import modalReducer from "./modalSlice.js";
import loggedInUserReducer from "./loggedInUserSlice.js"
import profilePageUserReducer from "./profilePageUserSlice.js";
import searchedUserReducer from "./searchedUserSlice.js";
import suggestedUsersReducer from "./suggestedUsers.js";
import feedPostsReducer from "./feedPostsSlice.js";
import profilePostsReducer from "./profilePosts.js";


const appstore = configureStore({
    reducer:{
        auth:authReducer,
        modal:modalReducer,
        loggedInUser:loggedInUserReducer,
        profilePageUser:profilePageUserReducer,
        searchedUser:searchedUserReducer,
        suggestedUsers:suggestedUsersReducer,
        feedPosts:feedPostsReducer,
        profilePosts:profilePostsReducer,
        feedPosts:feedPostsReducer,
    }
})

export default appstore;