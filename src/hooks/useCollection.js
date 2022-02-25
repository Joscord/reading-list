import { db } from '../firebase/config';
import { useState, useEffect } from 'react';
// Importamos cosas de Firebase Firestore
import { collection, onSnapshot } from 'firebase/firestore';

// Recibimos una colección (c) por parámetros. La llamamos c para que no sea confuso con el método ya llamado collection
export const useCollection = c => {
	const [documents, setDocuments] = useState(null);

	useEffect(() => {
		// Definimos una referencia para la colección. Usamos let porque eventualmente cambiaremos esto cuando también administremos queries. Como vimos el método collection recibe dos argumentos. La base de datos a la que nos conectaremos y la colección (c).
		let ref = collection(db, c);
		// Establecemos el listener real time con el método onSnapshot. Lo primero que pasamos como argumento es la referencia para que se conecte. Luego el segundo argumento es la función que se dispara siempre que cambie algo en la colección. Recordemos que el listener nos retorna una función para desuscribirnos y usar en la función de cleanup
		const unsuscribe = onSnapshot(ref, snapshot => {
			let results = [];
			snapshot.docs.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
			// Cambiamos el estado
			setDocuments(results);
		});
        return () => unsuscribe();
        // Pasamos la colección como dependencia
	}, [c]);

    return {
        documents
    }
};
