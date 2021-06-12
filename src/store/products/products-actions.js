import axios from 'axios';
import { productsActions } from './products-slice';
import { uiActions } from '../ui/ui-slice';

export const fetchProducts = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axios.get('http://apps.loopevo.com/apis/shop/books.php');

            if (response.status !== 200) {
                throw new Error('Could not fetch products data!');
            }

            return response.data;
        }

        try {
            dispatch(uiActions.setLoading({ loading: true }));
            const productsData = await fetchData();
            dispatch(productsActions.loadProducts(productsData));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(uiActions.setLoading({ loading: false }));
        }
    }
}

export const addProduct = (title, price, description, category, author) => {
    return async (dispatch) => {
        const sendData = async () => {
            const response = await axios.post('http://apps.loopevo.com/apis/shop/add-book.php', { title, price, description, category, author });

            if (response.status !== 200) {
                throw new Error('Could not post product!');
            }
        }

        try {
            dispatch(uiActions.setLoading({ loading: true }));
            await sendData();
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(uiActions.setLoading({ loading: false }));
        }
    }
}

export const editProduct = (id, title, price, description, category, author) => {
    return async (dispatch) => {
        const sendData = async () => {
            const response = await axios.post('http://apps.loopevo.com/apis/shop/edit-book.php', { id, title, price, description, category, author });

            if (response.status !== 200) {
                throw new Error('Could not post product!');
            }
        }

        try {
            dispatch(uiActions.setLoading({ loading: true }));
            await sendData();
            dispatch(fetchProducts());
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(uiActions.setLoading({ loading: false }));
        }
    }
}

export const deleteProduct = (id) => {
    return async (dispatch) => {
        const deleteData = async () => {
            const response = await axios.post('http://apps.loopevo.com/apis/shop/delete-book.php', { id });

            if (response.status !== 200) {
                throw new Error('Could not delete product!');
            }
        }

        try {
            dispatch(uiActions.setLoading({ loading: true }));
            await deleteData();
            dispatch(fetchProducts());
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(uiActions.setLoading({ loading: false }));
        }
    }
}

export const searchProduct = (search) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axios.post('http://apps.loopevo.com/apis/shop/search.php', { search }
            );

            if (response.status !== 200) {
                throw new Error('Could not search product!');
            }

            return response.data;
        }

        try {
            dispatch(uiActions.setLoading({ loading: true }));
            const productsData = await fetchData();
            dispatch(productsActions.loadSearchProducts(productsData));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(uiActions.setLoading({ loading: false }));
        }
    }
}

export const fetchProductsFromCategory = (category) => {
    return (dispatch) => {
        dispatch(uiActions.setLoading({ loading: true }));
        axios.post('http://apps.loopevo.com/apis/shop/books-category.php', { category })
            .then(response => {
                dispatch(productsActions.loadProductsFromCategory({ category: category, items: response.data}));
            })
            .catch(() => {
                console.log('Could not fetch products data!');
            })
            .then(() => {
                dispatch(uiActions.setLoading({ loading: false }));
            });
    }
}

export const fetchCategories = (category) => {
    return (dispatch) => {
        dispatch(uiActions.setLoading({ loading: true }));
        axios.post('http://apps.loopevo.com/apis/shop/categories.php', { category })
            .then(response => {
                dispatch(productsActions.loadCategories({ categories: response.data }));
            })
            .catch(() => {
                console.log('Could not fetch products data!');
            })
            .then(() => {
                dispatch(uiActions.setLoading({ loading: false }));
            });
    }
}
