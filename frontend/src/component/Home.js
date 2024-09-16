import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md';
import { Link } from 'react-router-dom';
export default function Home() {
    const [books,setBook]=useState([]);
    useEffect(()=>{
        axios
        .get('http://localhost:5000/books')
        .then((response)=>{
         setBook(response.data.data);
        })
        .catch((error)=>{
         console.log(error);
        });


    },[]);


  return (
    <div>
        <div>
            <h1>Book List</h1>
            <Link to='/books/create'>
            <MdOutlineAddBox/>
            </Link>
        </div>


        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>PublishYear</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book,index)=>(
                    <tr key={book._id}>
                        <td>{index+1}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publishYear}</td>
                        <td>
                            <div>
                                <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle/>
                                </Link>
                                <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit/>
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete/>
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
