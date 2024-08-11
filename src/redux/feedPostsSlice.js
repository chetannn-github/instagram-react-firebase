import { createSlice } from "@reduxjs/toolkit";

const feedPostsSlice = createSlice({
    name:"feedPosts",
    initialState:null,
    reducers:{
        addFeedPosts:(state,action) =>{
            return action.payload;
        },
        removeFeedPosts:(state,action) =>{
            return null;
        }
    }

})

export default feedPostsSlice.reducer;
export const {addFeedPosts,removeFeedPosts} = feedPostsSlice.actions;