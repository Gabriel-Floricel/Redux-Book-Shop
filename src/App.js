import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import AppRouter from './AppRouter';
import { useEffect } from 'react';
import { getCart } from './store/cart/cart-actions';
import { loginActions } from './store/login/login-slice';
import { fetchCategories } from './store/products/products-actions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const checkLoginState = () => {
    if (localStorage.getItem('username') && localStorage.getItem('token')) {
      dispatch(loginActions.loadUser({ username: localStorage.getItem('username'), token: localStorage.getItem('token') }));
    }
  }

  useEffect(() => {
    dispatch(fetchCategories());
    checkLoginState();
    dispatch(getCart());
  }, []);

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
