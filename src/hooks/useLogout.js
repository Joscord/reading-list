import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
        const logout = async () => {
            try {
                await signOut(auth);
                dispatch({type: 'LOGOUT'});

            } catch (err) {
                console.log('An error ocurred while loggin out', err.message);

            }
        }
    return {
        logout
    }
};
