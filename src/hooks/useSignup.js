import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
// importamos el hook para usar el contexto
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    // Destructuramos la función de dispatch
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {
        // Reseteamos el error, haciéndolo nulo. 
        setError(null);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // despachamos una acción de tipo login
            dispatch({type: 'LOGIN', payload: userCredential.user})
        } catch (err) {
            setError(err.message);
        }
    }

    // retornamos el error y la función de registro
    return {
        signup,
        error
    }
}