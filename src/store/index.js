import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui/ui-slice';
import cartSlice from './cart/cart-slice';
import productsSlice from './products/products-slice';
import loginSlice from './login/login-slice';

const store = configureStore({
    reducer: { 
        ui: uiSlice.reducer, 
        cart: cartSlice.reducer,
        products: productsSlice.reducer,
        login: loginSlice.reducer
    }
});

export default store;