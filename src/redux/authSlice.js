import { createSlice } from "@reduxjs/toolkit"


const authSlice = createSlice({
    name:"auth",
    initialState:{
        isLoginForm:true,
        errorMsg:null,
    },
    reducers:{
        toggleLoginForm:(state,action) =>{
            state.isLoginForm= !state.isLoginForm;
        },
        addErrorMsg :(state,action) =>{
            state.errorMsg = action.payload;
        }

    }
});

export default authSlice.reducer;
export const {toggleLoginForm ,addErrorMsg} = authSlice.actions;