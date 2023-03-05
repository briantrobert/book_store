// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { libros } from "@/data/books"

export default function handler(req, res) {

  if(req.method === 'GET'){
    res.status(200).json(libros)
  }else if(req.method === 'POST'){
    const data = req.body.data
    const newData = {
      id: Date.now(),
      nombre: data.nombre,
      isbn: data.isbn,
      descripción:data.descripción,
      year_published:data.year_published,
    }
    libros.push(newData)
    res.status(201).json(newData)
  }
  
}
