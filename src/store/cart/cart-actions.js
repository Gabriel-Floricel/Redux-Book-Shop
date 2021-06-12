import { cartActions } from './cart-slice';
import axios from 'axios';
import { uiActions } from '../ui/ui-slice';

export const saveCart = (items, totalQuantity) => {
    localStorage.setItem('cart-items', JSON.stringify(items));
    localStorage.setItem('cart-total-quantity', totalQuantity);
}

export const getCart = () => {
    return (dispatch) => {
        const items = localStorage.getItem('cart-items') ? JSON.parse(localStorage.getItem('cart-items')) : [];
        const totalQuantity = localStorage.getItem('cart-total-quantity') ? localStorage.getItem('cart-total-quantity') : 0;

        dispatch(cartActions.loadCart({ items, totalQuantity }));
    }
}

export const sendOrder = (items) => {
    return (dispatch) => {

        let order = '';

        items.forEach(element => {
            order += `ID: ${element.id}, TITLE: ${element.title}, QUANTITY: ${element.quantity}; `;
        });

        dispatch(uiActions.setLoading({ loading: true }));
        axios.post('http://apps.loopevo.com/apis/shop/save-order.php', { order })
            .then(() => {
                localStorage.removeItem('cart-items');
                localStorage.removeItem('cart-total-quantity');
            })
            .catch(() => { })
            .then(() => {
                dispatch(uiActions.setLoading({ loading: false }));
            });
    }
}