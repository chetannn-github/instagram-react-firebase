import { createSlice } from "@reduxjs/toolkit"


const authSlice = createSlice({
    name:"auth",
    initialState:{
        isLoginForm:true
    },
    reducers:{
        toggleLoginForm:(state,action) =>{
            state.isLoginForm= !state.isLoginForm;
        }
    }
});

export default authSlice.reducer;
export const {toggleLoginForm} = authSlice.actions;