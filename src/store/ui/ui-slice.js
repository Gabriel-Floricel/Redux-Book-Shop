import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { 
        cartIsVisible: false,
        loading: false
    },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        setLoading(state, action) {
            state.loading = action.payload.loading;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;