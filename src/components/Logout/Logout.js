import React, { useEffect } from 'react';
import { loginActions } from '../../store/login/login-slice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(loginActions.logout());
        history.push('/');
    }, []);

    return (
        <></>
    );
}

export default Logout;