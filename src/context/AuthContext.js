// Importamos la función para crear el contexto
import { createContext, useReducer, useEffect } from 'react';
// Importamos el objeto de autenticación
import { auth } from '../firebase/config';
// Importamos la función para que Firebase evalúe inmediatamente si hay un usuario logueado o no (al cargar la app)
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, user: action.payload };
		case 'LOGOUT':
			return { state, user: null };
		case 'AUTH_IS_READY':
			return { user: action.payload, authIsReady: true };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
		authIsReady: false,
	});
    useEffect(() => {
        // En Firebase 9 auth es pasado como parámetro a la función que importamos directamente desde firebase/auth
        const unsuscribe = onAuthStateChanged(auth, user => {
            dispatch({type: 'AUTH_IS_READY', payload: user})
        });
        unsuscribe();
    }, [])

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
