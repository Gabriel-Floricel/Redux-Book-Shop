import React, { useEffect } from 'react';
import classes from './Products.module.css';
import { useSelector } from 'react-redux';
import ProductsList from './ProductsList';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/products/products-actions';
import Spinner from '../UI/Spinner/Spinner';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const loading = useSelector(state => state.ui.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite books</h2>
      <ProductsList products={products} />
    </section>
  );
};

export default Products;
