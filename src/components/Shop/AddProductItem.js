import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/products/products-actions';

const AddProductItem = (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch(addProduct(title, price, description, category, author));
    }

    return (
        <div className="form-container">
            <form>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            
                <input 
                    type="submit" 
                    value="Submit" 
                    onClick={(e) => submit(e)}
                />
            </form>
        </div>
    );
};

export default AddProductItem;
