import express = require('express');
import UserRouter from './router/UserRouter'



const app =  express();
app.use(express.json());

app.use('/user', UserRouter)
app.listen(3000,(err)=>{
    console.log("Server running on port 3000")
})