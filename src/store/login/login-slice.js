import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        username: null,
        token: null
    },
    reducers: {
        loadUser(state, action) {
            state.username = action.payload.username;
            state.token = action.payload.token;
            localStorage.setItem('username', action.payload.username);
            localStorage.setItem('token', action.payload.tokem);
        },
        logout(state, action) {
            state.username = null;
            state.token = null;
            localStorage.removeItem('username');
            localStorage.removeItem('token');
        }
    }
});

export const loginActions = loginSlice.actions;
export default loginSlice;

