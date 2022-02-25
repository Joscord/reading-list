import { useState, useEffect } from 'react';
// Importamos db
import { db } from '../firebase/config';
// Importamos useCollection
import { useCollection } from '../hooks/useCollection';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

export default function Home() {
  // Usamos nuestro custom hook. Pasando la colección de books
  const { documents: books } = useCollection('books');
	return (
		<div className='App'>
			{books && <BookList books={books} />}
			<BookForm />
		</div>
	);
}
