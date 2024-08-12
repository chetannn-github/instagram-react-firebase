import { createSlice } from "@reduxjs/toolkit";

const editPostSlice = createSlice({
    name:"editPost",
    initialState:null,
    reducers:{
        addEditPostDetails:(state,action) =>{
            return action.payload
        },
        removeEditPostDetails:(state,action) =>{
            return null
        }
     }
})

export default editPostSlice.reducer;
export const {addEditPostDetails, removeEditPostDetails } = editPostSlice.actions;