import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { searchProduct } from '../../store/products/products-actions';
import { useDispatch } from 'react-redux';

const Search = () => {
    const [searchText, setSearchText] = useState();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (searchText !== '') {
            dispatch(searchProduct(searchText));
            history.push({
                pathname: '/search',
                state: { search: searchText }
            });
        }   
    }

    return (
        <Form inline>
            <FormControl onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
            <Button onClick={handleSearch} variant="outline-success">Search</Button>
        </Form>
    );
}

export default Search;