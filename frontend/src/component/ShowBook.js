import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function ShowBook() {
    const[book,setBook]=useState([])
    const{id}=useParams();
    useEffect(()=>{
        axios
        .get(`http://localhost:5000/books/${id}`)
        .then((response)=>{
          setBook(response.data);

        })
        .catch((error)=>{
          console.log(error);
        })
    })
  return (
    <div>
      <div>
        <span>Title</span>
        <span>{book.title}</span>
      </div>
      <div>
        <span>Author</span>
        <span>{book.author}</span>
      </div>
      <div>
        <span>Publish Year</span>
        <span>{book.publishYear}</span>
      </div>
      <div>
        <span>Created Time</span>
        <span>{new Date(book.createdAt).toString()}</span>
      </div>
      <div>
        <span>Updated Time</span>
        <span>{new Date(book.updatedAt).toString()}</span>
      </div>
    </div>
  )
}
