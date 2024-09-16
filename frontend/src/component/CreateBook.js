import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreateBook() {
    const[title,settitle]=useState('');
    const[author,setAuthor]=useState('');
    const[publishYear,setpublishYear]=useState('');
    const navigate=useNavigate();
    const handlesaveBook=()=>{
        const data={
            title,
            author,
            publishYear,
        };
        axios
        .post("http://localhost:5000/books",data)
        .then(()=>{
            navigate('/');
        })
        .catch((error)=>{
            console.log(error);

        })
    }
  return (
    <div>
      <h1>Create Book</h1>
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
        <button onClick={handlesaveBook}>Save</button>
      </div>
    </div>
  )
}
