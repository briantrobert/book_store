import React from 'react'

export default function BookUI({ book,deleteBook }) {

    return (

        <div className="bg-white rounded-lg overflow-hidden shadow-md w-65">
            {/* <!-- <a href="/" class="hover:shadow-xl"> --> */}
            <div className="relative pb-2/3">
                {/* <img className="absolute object-cover h-full w-full" src={book.img} alt="ice_cream1"/> */}
            </div>
            <div className="p-6">
                <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">{book.descripción}</div>
                <h4 className="font-semibold text-lg leading-tight truncate">{book.nombre}</h4>
                <div className="mt-1">Publicado: {book.year_published}</div>
                <div className="mt-4">ISBN: {book.isbn}</div>
                <button className='text-gray-600  bg-red-300 rounded py-1 px-2 mt-1' onClick={() => deleteBook(book.id)}>Eliminar</button>
            </div>
            {/* <!-- </a> --> */}
        </div>




    )
}
