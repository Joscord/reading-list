import { useState, useEffect } from 'react'
// Importamos db
import { db } from '../firebase/config';
// Debemos importar las funciones específicas que queremos usar de Firebase
import { collection, getDocs } from 'firebase/firestore';
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'

export default function Home() {
  const [books, setBooks] = useState(null);

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
