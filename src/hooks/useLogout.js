// Importamos el objeto de autentiación
import { auth } from '../firebase/config';
// Importamos la función para desloguear
import { signOut } from 'firebase/auth';

export const useLogout = () => {
		// El único argumento que necesita la función signOut es el objeto auth
        const logout = async () => {
            try {
                await signOut(auth);
                console.log('logged out');

            } catch (err) {
                console.log('An error ocurred while loggin out', err.message);

            }
        }
    return {
        logout
    }
};
