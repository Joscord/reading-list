// Importamos la función para crear el contexto
import { createContext, useReducer } from 'react';
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

export const authContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
		authIsReady: false,
	});

	useEffect(() => {
		// En Firebase 9 en lugar de invocar un método de auth, importamos la función directamente y pasamos auth como parámetro
		const unsub = onAuthStateChanged((auth, user) => {
			dispatch({ type: 'AUTH_IS_READY', payload: user });
			unsub();
		}, []);

		return () => {
			second;
		};
	}, [third]);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
