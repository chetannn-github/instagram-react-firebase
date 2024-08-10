import { createSlice } from "@reduxjs/toolkit";

const profilePageUserSlice = createSlice({
    name:"profilePageUser",
    initialState:null,
    reducers:{
        addProfileUser:(state,action) =>{
            return action.payload
        },
        removeProfileUser:(state,action) =>{
            return null
        }

    }
})


export default profilePageUserSlice.reducer;
export const {addProfileUser,removeProfileUser} = profilePageUserSlice.actions;