// Importamos useState
import { useState } from "react";
// Importamos el objeto auth y el método createUserWithEmailAndPassword. Recordemos el enfoque más modular de Firebase 9, importando funciones en específico en lugar de paquetes completos
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
    // Definimos una pieza de estado para el error
    const [error, setError] = useState(null);

    // Definimos la función de registro para ser usada en otro componente
    const signup = async (email, password) => {
        // Reseteamos el error, haciéndolo nulo. 
        setError(null);
        try {
            // Usamos una función de firebase para el registro. Notemos que la función se usa de forma similar a en Firebase 8 pero ahora pasamos como primer argumento el objeto auth. Nótese que hay un enfoque similar como cuando trabajábamos con Firestore, pasando primero el objeto db. userCredential vendría a ser la respuesta y dentro de ésta viene el usuario en la propiedad user
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('user signed up:',userCredential.user);
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