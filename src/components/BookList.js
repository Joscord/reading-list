import { db } from '../firebase/config';
// El método doc nos da una referencia a un documento (similar a collection que nos da una referencia a una colección)y el método deleteDoc nos permite borrar un documento usando una referencia a éste
import { doc, deleteDoc} from 'firebase/firestore'

export default function BookList({ books }) {

  const handleClick = async (id) => {
    // Primero obtenemos una referencia a un documento. El primer argumento es la base de datos, la segunda es la colección y el tercer argumento el id del documento que deseamos referenciar
    const ref = doc(db, 'books', id);
    // Esperamos borrar el documento
    await deleteDoc(ref);
  }

  return (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => handleClick(book.id)}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}