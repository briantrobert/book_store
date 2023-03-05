import React from 'react'

export default function MenuBar() {
  return (
    <div>
        <nav className="flex justify-between items-center font-semibold bg-slate-400 shadow-md py-4 px-4 ">
      <div className="flex justify-items-center">
        <h1>
          <a href="/">Tienda de libros</a>
        </h1>
      </div>

      <div className="flex items-center space-x-10">
        {/* <!-- definition of menu destock view --> */}
        <div className="hidden sm:block space-x-10">
            <ul className="flex justify-items-start space-x-5">
              <li>
                <a className="py-2 px-2 justify-center rounded-md text-black hover:bg-gray-700 hover:text-white transition ease-in-out duration-300" href="/books_view">
                  <span>Mis libros</span>
                </a>
              </li>
              <li>
                <a className="py-2 px-2 justify-center rounded-md text-black hover:bg-gray-700 hover:text-white transition ease-in-out duration-300" href="/">
                  <span>Autores</span>
                </a>
              </li>
            </ul>
          </div>
         </div>
      </nav>
    </div> 
  )
}
