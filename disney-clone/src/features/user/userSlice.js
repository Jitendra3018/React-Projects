import {createSlice} from '@reduxjs/toolkit';

const initialState = {      // Initially store nothing for the user.
    name: '',
    email: '', 
    photo: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {       //In this we are doing that if the user logs in then do remember the name, email and photo of the user
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setSignOutState: state => {     // Stores the details of the user as null as soon as we sign out from the page
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
})

export const {setUserLoginDetails, setSignOutState} = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;