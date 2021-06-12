import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { cartActions } from '../../store/cart/cart-slice';
import { deleteProduct } from '../../store/products/products-actions';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import ConfirmModal from '../UI/ConfirmModal/ConfirmModal';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector(state => state.login.username);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price
      })
    );
  }

  const deleteItemtHandler = () => {
    dispatch(deleteProduct(id));
  }

  const editHandler = () => {
    history.push(`/edit-product/${id}`)
  }

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);

  return (
    <>
      <li className={classes.item}>
        <Card>
          <header>
            <h3>{title}</h3>
            <div className={classes.price}>${price}</div>
          </header>
          <p>{description}</p>
          <div className={classes.actions}>
            <button onClick={addToCartHandler}>Add to Cart</button>
            {username &&
              <>
                <button onClick={editHandler}>Edit</button>
                <button onClick={handleShowDeleteModal}>Delete</button>
              </>
            }
          </div>
        </Card>
      </li>
      <ConfirmModal 
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        handleConfirm={deleteItemtHandler}
        titleText="Confirm"
        bodyText={`Are you sure you want to delete the book with the title ${title}?`}
        cancelText="Cancel"
        confirmText="Confirm"
      />
    </>
  );
};

export default ProductItem;
