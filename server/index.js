import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';


const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extend: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(
    `mongodb+srv://pavankumarsimma08:${process.env.MONGODB_PWD}@cluster0.ltxgsny.mongodb.net/?retryWrites=true&w=majority`
).then(()=>app.listen(PORT, ()=>
    console.log(`Connected to DB ans Server is running on port ${PORT}`)
    )
    ).catch((err)=>console.log(err));