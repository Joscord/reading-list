export default function BookList({ books }) {

  const handleClick = async (id) => {
    console.log(id)
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