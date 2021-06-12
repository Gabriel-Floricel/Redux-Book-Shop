import React, { useState } from 'react';
import { login } from '../../store/login/login-actions';
import { useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const submit = () => {
        dispatch(login(username, password));
        history.push('/');
    }

    return (
        <div className="form-container">
            <form>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            
                <input 
                    type="button" 
                    value="Submit" 
                    onClick={(e) => submit(e)}
                />
            </form>
        </div>
    );
}

export default Login;