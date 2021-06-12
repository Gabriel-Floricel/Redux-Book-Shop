import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct } from '../../store/products/products-actions';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const EditProduct = (props) => {
    const products = useSelector(state => state.products.items);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        if (!products.length) {
            history.push('/');
        } else {
            const product = products.find(product => product.id === params.id);
            setTitle(product.title);
            setPrice(product.price);
            setDescription(product.description);
            setCategory(product.category);
            setAuthor(product.author);
        }
    }, [params.id, products]);

    const submit = (e) => {
        e.preventDefault();
        dispatch(editProduct(params.id, title, price, description, category, author));
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

export default EditProduct;
