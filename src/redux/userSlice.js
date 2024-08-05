import { createSlice } from "@reduxjs/toolkit";


let userSlice = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action) =>{
            return action.payload;
        },
        removeUser :(state,action) =>{
            return null
        }
    }
});

export default userSlice.reducer;
export const {addUser , removeUser} = userSlice.actions;