import { useState } from 'react'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'

export default function Home() {
  const [books, setBooks] = useState([
    { title: 'the name of the wind', id: 1 },
    { title: 'the dragon reborn', id: 2 },
    { title: 'the final empire', id: 3 },
    { title: 'the way of kings', id: 4 }
  ])

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
