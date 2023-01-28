import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        id: null,
        isAuth: false,
    },
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.isAuth = true;
        },
        removeUser(state) {
            state.email = null;
            state.id = null;
            state.isAuth = false;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
