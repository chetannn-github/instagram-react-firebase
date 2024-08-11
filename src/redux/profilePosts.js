import { createSlice } from "@reduxjs/toolkit";

const profilePosts = createSlice({
    name:"profilePosts",
    initialState:null,
    reducers:{
        addProfilePosts:(state,action) =>{
            return action.payload;
        },
        removeProfilePosts:(state,action) =>{
            return null;
        }
    }
})

export default profilePosts.reducer;
export const {addProfilePosts,removeProfilePosts} = profilePosts.actions;