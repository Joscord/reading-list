import { useCollection } from '../hooks/useCollection';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Home() {
	// Obtenemos el usuario del contexto
	const { user } = useAuthContext();
	// Pasamos los parámetros de la query en forma de arreglo
	const { documents: books } = useCollection('books', ['uid', '==', user.uid]);
	return (
		<div className='App'>
			{books && <BookList books={books} />}
			<BookForm />
		</div>
	);
}
