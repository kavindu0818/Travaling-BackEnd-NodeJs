import express = require('express');
import UserRouter from './router/UserRouter'
import ChatRouter from './router/ChatRouter'
import TravelDetailsRouter from "./router/TravelDetailsRouter";



const app =  express();
app.use(express.json());

app.use('/user', UserRouter)
app.use('/chat', ChatRouter)
app.use('/td', TravelDetailsRouter)

app.listen(3000,(err)=>{
    console.log("Server running on port 3000")
})