import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    email: "",
    photo: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {      //Used to make the user log in and save the data
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setSignOut: (state) => {        // Used to make the user sign out so that we don't have the data anymore
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
})

export const { setUserLogin, setSignOut } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
