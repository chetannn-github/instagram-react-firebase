import { createSlice } from "@reduxjs/toolkit";

const suggestedUsersSlice = createSlice({
    name:"searchedUser",
    initialState:null,
    reducers:{
        addSuggestedUsers : ( state , action ) =>{
            return action.payload;
        },
        removeSuggestedUsers:()=>{
            return null;
        }
    }
})

export default suggestedUsersSlice.reducer;
export const {addSuggestedUsers,removeSuggestedUsers} = suggestedUsersSlice.actions;