import express from "express"

import {PORT,MongodbUrl} from "./config.js"

import mongoose from "mongoose";
import cors from "cors";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'

const app=express();

app.use(express.json());

app.use(cors());

// app.use(cors({
//     origin:'http://localhost:5000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }))

app.get('/',(req,res)=>{
    console.log(req);
    res.send('welcome')
    })


app.use('/books',booksRoute)


mongoose.connect(MongodbUrl)
.then(()=>{
console.log('succesfully connected database...')
app.listen(PORT,()=>{
    console.log(`server is listening${PORT}`)
})
})
.catch((error)=>{
    console.log(error)

})





