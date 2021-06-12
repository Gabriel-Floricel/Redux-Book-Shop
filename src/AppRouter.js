import AddProductItem from './components/Shop/AddProductItem';
import EditProduct from './components/Shop/EditProduct';
import Products from './components/Shop/Products';
import SearchResults from './components/Shop/SearchResults';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MainHeader from './components/Layout/MainHeader';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import CategoryProducts from './components/Shop/CategoryProducts';
import Spinner from './components/UI/Spinner/Spinner';

const AppRouter = () => {
    const showCart = useSelector(state => state.ui.cartIsVisible);

    return (
        <Router>
            <MainHeader />
            {showCart && <Cart />}
            <Switch>
                <Route path="/add-product">
                    <AddProductItem />
                </Route>
                <Route path="/edit-product/:id">
                    <EditProduct />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/logout">
                    <Logout />
                </Route>
                <Route path="/search">
                    <SearchResults />
                </Route>
                <Route path="/category/:category">
                    <CategoryProducts />
                </Route>
                <Route path="/">
                    <Products />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;