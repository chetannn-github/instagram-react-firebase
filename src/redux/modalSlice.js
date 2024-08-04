import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name:"modal",
    initialState:{
        searchModal:false,
        newPostModal:false,
    },
    reducers:{
        openSearchModal:(state ) =>{
            state.searchModal = true;
        },
        closeSearchModal:(state ) =>{
            state.searchModal = false;
        },
        openNewPostModal:(state ) =>{
            state.newPostModal = true;
        },
        closeNewPostModal:(state ) =>{
            state.newPostModal= false;
        },
    }
});

export default modalSlice.reducer;
export const {openNewPostModal, openSearchModal, closeSearchModal,closeNewPostModal} = modalSlice.actions;