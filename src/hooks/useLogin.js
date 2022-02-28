import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
// Importamos el hook para utilizar el contexto
import { useAuthContext } from './useAuthContext';


export const useLogin = () => {
    const [error, setError] = useState(null);
    // Destructuramos la función de despacho
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Luego de loguear en Firebase, disparamos una acción para modificar el estado de nuestra app
            dispatch({type: 'LOGIN', payload: userCredential.user});
        } catch (err) {
            setError(err.message);
        }
    }

    // retornamos el error y la función de login
    return {
        login,
        error
    }
}