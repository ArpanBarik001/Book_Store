import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditBook() {
    const[title,settitle]=useState('');
    const[author,setAuthor]=useState('');
    const[publishYear,setpublishYear]=useState('');
    const {id}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
    
        axios
        .get(`http://localhost:5000/books/${id}`)
        .then((response)=>{
            settitle(response.data.title)
            setAuthor(response.data.author)
            setpublishYear(response.data.publishYear)

        })
        .catch((error)=>{
            console.log(error);

        })
    }, [id])
    const handleEditBook=()=>{
        const data={
            title,
            author,
            publishYear,
        };
        axios
        .put(`http://localhost:5000/books/${id}`,data)
        .then(()=>{
            navigate('/');
        })
        .catch((error)=>{
            console.log(error);

        })
    }
  return (
    <div>
        <div>
       <lebel>Tiltle</lebel>
        <input
        type='text'
        value={title}
        onChange={(e)=>settitle(e.target.value)}
        />
      </div>
      <div>
      <lebel>Author</lebel>
        <input
        type='text'
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
        />
      </div>
      <div>
      <lebel>PublishYear</lebel>
        <input
        type='number'
        value={publishYear}
        onChange={(e)=>setpublishYear(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleEditBook}>Save</button>
      </div>
    </div>
  )
}
