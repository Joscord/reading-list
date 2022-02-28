import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from './useAuthContext';


export const useLogin = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            dispatch({type: 'LOGIN', payload: userCredential.user});
        } catch (err) {
            setError(err.message);
        }
    }

    return {
        login,
        error
    }
}