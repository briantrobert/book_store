import React, { useState } from 'react'
import BookUI from '../../components/BookUI'
import FormBook from '../../components/FormBook'

export default function BookList() {

  const [books, setBooks] = useState([])
  let [isOpen, setIsOpen] = useState(true)

  const fetchBooks = async () => {
    const response = await fetch('api/booksApi')
    console.log(response)
    const data = await response.json()
    setBooks(data)
  }

  const submitBooks = async (data) => {
    const response = await fetch('api/booksApi', {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const dt = await response.json()
    console.log(dt)
    fetchBooks()
  }

  const deleteBook = async booksid => {
    const response = await fetch(`api/${booksid}`, {
      method: 'DELETE',
    })
    const dt = await response.json()
    console.log(dt)
    fetchBooks()
  }

  return (
    <div className='m-2 border rounded-sm h-[calc(100vh_-_5rem)] shadow-lg'>
      {
      isOpen ? 
      <>
      <div className='m-2'>
        <button className='px-4 py-1 bg-slate-500 m-2 rounded text-center text-gray-800 font-semibold' onClick={() => fetchBooks()}>Listar libros</button>
        <button className='px-2 py-1  bg-lime-300 rounded-full ml-2 text-center text-gray-800 font-semibold' onClick={() => setIsOpen(!isOpen)}>Adicionar</button>
      </div>

      <div className="h-[calc(95vh_-_7rem)] grid lg:grid-cols-4 m-4 gap-2 sm:grid-cols-2">
        {books && books.map(book => {
          return (
            <div key={book.id}>
              <BookUI book={book} deleteBook={deleteBook}/>
            </div>
          )

        })}
      </div></> : <><FormBook props={[setIsOpen,submitBooks]}/></>}

   </div>
  )
}