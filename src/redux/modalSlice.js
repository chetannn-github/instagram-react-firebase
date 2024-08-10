import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name:"modal",
    initialState:{
        searchModal:false,
        newPostModal:false,
        editProfileModal:false

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
        openEditProfileModal:(state ) =>{
            state.editProfileModal = true;
        },
        closeEditProfileModal:(state ) =>{
            state.editProfileModal= false;
        },
    }
});

export default modalSlice.reducer;
export const {openNewPostModal, openSearchModal, closeSearchModal,closeNewPostModal,openEditProfileModal,closeEditProfileModal} = modalSlice.actions;