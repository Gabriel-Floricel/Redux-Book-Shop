import { createSlice } from '@reduxjs/toolkit';
import { saveCart } from './cart-actions';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id, 
                    price: Number(newItem.price), 
                    quantity: 1, 
                    totalPrice: Number(newItem.price),
                    title: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + Number(newItem.price);
            }

            saveCart(state.items, state.totalQuantity);
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - Number(existingItem.price);
            }

            saveCart(state.items, state.totalQuantity);
        },
        loadCart(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;