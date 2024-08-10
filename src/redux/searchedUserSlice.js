import { createSlice } from "@reduxjs/toolkit";

const searchedUserSlice = createSlice({
    name:"searchedUser",
    initialState:null,
    reducers:{
        addSearchedUser : ( state , action ) =>{
            return action.payload;
        },
        removeSearchedUser:()=>{
            return null;
        }
    }
})

export default searchedUserSlice.reducer;
export const {addSearchedUser,removeSearchedUser} = searchedUserSlice.actions;