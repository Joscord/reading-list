import { db } from '../firebase/config';
import { useState, useEffect, useRef } from 'react';
// Importamos la función query
import { collection, onSnapshot, query, where } from 'firebase/firestore';

// Recibimos dos parámetros, la colección y una query (q)
export const useCollection = (c, _q) => {
	const [documents, setDocuments] = useState(null);
	// Preparamos la query con una referencia
	const q = useRef(_q).current;

	useEffect(() => {
		let ref = collection(db, c);

		// Si viene una query actualizamos la referencia
		if (query) {
			// la función query recibe una referencia a una colección. El segundo argumento es el método para hacer la consulta (where). Usamos ... para esparcir el arreglo como argumentos de where 
			ref = query(ref, where(...q));
		}
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
