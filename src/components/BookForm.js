import { useState } from 'react'
// importamos el objeto db y las funciones de firestore para trabajar. addDoc es la función que nos permite añadir documentos
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export default function BookForm() {
  const [newBook, setNewBook] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Para addDoc pasamos primero la referencia de la colección a la que queremos añadir el documento, usamos otra forma de pasar la referencia para enseñar las diferentes maneras. El segundo argumento es el bojeto que representa el documento que deseamos añadir
    await addDoc(collection(db, 'books'), {
      title: newBook 
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
