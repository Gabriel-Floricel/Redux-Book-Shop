import React, { useEffect } from 'react';
import classes from './Products.module.css';
import { useSelector, useDispatch } from 'react-redux';
import ProductsList from './ProductsList';
import { fetchProductsFromCategory } from '../../store/products/products-actions';
import { useParams } from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';

const CategoryProducts = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const products = useSelector(state => state.products.categories[category]);
    const loading = useSelector(state => state.ui.loading);

    useEffect(() => {
        dispatch(fetchProductsFromCategory(category));
    }, [dispatch, category]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <section className={classes.products}>
            <h2>Products from category: {category}</h2>
            <ProductsList products={products} />
        </section>
    );
};

export default CategoryProducts;
