import { useState, useEffect } from 'react'
// Importamos db
import { db } from '../firebase/config';
// Debemos importar las funciones específicas que queremos usar de Firebase
import { collection, getDocs } from 'firebase/firestore';
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'

export default function Home() {
  const [books, setBooks] = useState(null);
  // Hacemos el fetch de la data usando useEffects
  useEffect(() => {
    // Creamos una referencia para una colección. El método colecction recibe dos argumentos: el primero es la base de datos a la que nos queremos conectar (db). El segundo es el nombre de la colección (books).
    const ref = collection(db, 'books');
    // Este método es para obtener los documentos pero retorna una promesa
    const getDocuments = async reference => {
      try {
        // Obtenemos el snapshot
        const snapshot = await getDocs(reference);
        let results = [];
        snapshot.docs.forEach(doc => results.push({id: doc.id, ...doc.data()}));
        // Cambiamos el estado
        setBooks(results);
      } catch (error) {
        console.log(error);
      }
    }
    getDocuments(ref);
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
