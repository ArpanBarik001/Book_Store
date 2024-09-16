import axios from 'axios'
import React  from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function DeleteBook() {
    const navigate=useNavigate();
    const {id}=useParams();
     const handleDeleteBook=()=>{
        axios
        .delete(`http://localhost:5000/books/${id}`)
        .then(()=>{
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)

        })
     }
  return (
    <div>
        <h1>Are You sure to delete it?</h1>
        <button onClick={handleDeleteBook}>Yes delete It.</button>
      
    </div>
  )
}
