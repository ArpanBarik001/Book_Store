
import express from 'express';
const router=express.Router();

import { Book } from '../models/bookModel.js';


//route for save a new book
    
    router.post('/',async(req,res)=>{
        try{
            if(
                !req.body.title||
                !req.body.author||
                !req.body.publishYear
            ){
                return res.status(500).send('send all required field..');
            }
    
            else{
                const newBook={
                    title:req.body.title,
                    author:req.body.author,
                    publishYear:req.body.publishYear,
                };
    
                const book=await Book.create(newBook);
                return res.status(200).send(book);
            }
        
    
        }
        catch(error){
            console.log(error)
            res.status(500).send(error)
        }
    
    })
    
//route for get all book from database  
    router.get('/',async(req,res)=>{
    try{
    
        const books=await Book.find({});
        return res.status(200).json({
            count:books.length,
            data:books
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
    })
//route for get one book from database by id
    router.get('/:id',async(req,res)=>{
        try{
        
            const{id}=req.params;
            const book=await Book.findById(id);
            return res.status(200).json(book)
        }
        catch(error){
            console.log(error)
            res.status(500).send(error)
        }
        })
//route for update book by id
    router.put('/:id',async(req,res)=>{
        try{
            if(
                !req.body.title||
                !req.body.author||
                !req.body.publishYear
            ){
                return res.status(500).send('send all required field..');
            }
            else{
                const{id}=req.params;
                const result=await Book.findByIdAndUpdate(id,req.body);
                if(!result){
                    return res.status(500).json("book not found..")
                }
                else{
                    return res.status(200).send("book updated successfully..")
                }
            }
        }
        catch(error){
            console.log(error)
            res.status(500).send(error)
        }
    })
//route for delete one book from id
    router.delete('/:id',async(req,res)=>{
        try{
            const{id}=req.params;
            const result=await Book.findByIdAndDelete(id)
            if(!result){
                return res.status(500).json("book not found")
            }
            else{
                return res.status(200).send("book deleted succesfully..")
            }
        }
        catch(error){
            console.log(error)
            res.status(500).send(error)
        }
    })
    

 export default router;