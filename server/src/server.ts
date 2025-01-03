// const forceDatabaseRefresh = false;
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app =express();
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist'));

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})
