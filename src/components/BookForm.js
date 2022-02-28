import { useState } from 'react'
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
// Importamos nuestro hook de contexto
import { useAuthContext } from '../hooks/useAuthContext'

export default function BookForm() {
  const [newBook, setNewBook] = useState('')
// Usamos nuestro custom hooks
const { user } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Pasamos una nueva propiedad uid que seŕa igual al uid del usuario conectado
    await addDoc(collection(db, 'books'), {
      title: newBook,
      uid: user.uid
    })
    setNewBook('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input 
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
