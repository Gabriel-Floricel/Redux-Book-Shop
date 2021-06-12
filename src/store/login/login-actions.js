import axios from 'axios';
import { loginActions } from './login-slice';
import { uiActions } from '../ui/ui-slice';

export const login = (username, password) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axios.post('http://apps.loopevo.com/apis/shop/login.php', {
                username,
                password
            });

            if (response.status !== 200) {
                throw new Error('Invalid username or password!');
            }

            return response.data;
        }

        try {
            dispatch(uiActions.setLoading({ loading: true }));
            const loginData = await fetchData();
            dispatch(loginActions.loadUser({ username: loginData.username, token: loginData.token }));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(uiActions.setLoading({ loading: false }));
        }
    }
}