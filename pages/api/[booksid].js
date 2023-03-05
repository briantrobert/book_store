import { libros } from "@/data/books"

export default function handler(req, res) {
    const {booksid} = req.query

    if(req.method === 'GET'){
        const libro = libros.find(libro => libro.id === parseInt(booksid))
        res.status(200).json(libro)
    }else if(req.method === "DELETE"){
        const deleteBk = libros.find(libro => libro.id === parseInt(booksid))

        const index = libros.findIndex(libro => libro.id === parseInt(booksid))

        libros.splice(index, 1)
        res.status(200).json(deleteBk)
    }
    

    
}