import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { sendOrder } from '../../store/cart/cart-actions';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  
  const buy = () => {
    dispatch(sendOrder(cartItems));
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{ 
              id: item.id,
              title: item.title, 
              quantity: item.quantity, 
              total: item.totalPrice, 
              price: item.price 
            }}
          />
        ))}
      </ul>
      <button onClick={buy}>Order</button>
    </Card>
  );
};

export default Cart;
