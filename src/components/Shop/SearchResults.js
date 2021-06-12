import classes from './Products.module.css';
import { useSelector } from 'react-redux';
import ProductsList from './ProductsList';
import { useLocation } from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';

const SearchResults = () => {
    const products = useSelector(state => state.products.searchItems);
    const location = useLocation();
    const loading = useSelector(state => state.ui.loading);
    let text = '';
    
    if (!location.state.search) {
        text = 'Please add a book title for search';
    } else {
        if (products.length) {
            text = `Search results for: ${location.state.search}`;
        } else {
            text = `No search results for: ${location.state.search}`;
        }
    }

    if (loading) {
        return <Spinner />;
    }

    return (
        <section className={classes.products}>
            <h2>{text}</h2>
            <ProductsList products={products} />
        </section>
    );
};

export default SearchResults;