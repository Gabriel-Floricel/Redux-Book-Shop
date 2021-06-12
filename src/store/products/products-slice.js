import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        searchItems: [],
        categories: {}
    },
    reducers: {
        loadProducts(state, action) {
            state.items = action.payload;
        },
        loadSearchProducts(state, action) {
            state.searchItems = action.payload;
        },
        loadProductsFromCategory(state, action) {
            state.categories[action.payload.category] = action.payload.items;
        },
        loadCategories(state, action) {
            action.payload.categories.forEach(category => {
                state.categories[category] = null;
            });
        }
    }
});

export const productsActions = productsSlice.actions;
export default productsSlice;

