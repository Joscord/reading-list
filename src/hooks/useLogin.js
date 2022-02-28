import { useState } from "react";
import { auth } from "../firebase/config";
// Importamos la función para el loggin
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
    const [error, setError] = useState(null);

    const login = async (email, password) => {
        // Reseteamos el error, haciéndolo nulo. 
        setError(null);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('user signed up:',userCredential.user);
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