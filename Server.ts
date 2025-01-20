import express = require('express');
import UserRouter from './router/UserRouter'
import ChatRouter from './router/ChatRouter'
import TravelDetailsRouter from "./router/TravelDetailsRouter";
import TravelTipsRouter from "./router/TravelTipsRouter";
import LocationRouter from "./router/LocationRouter";


const app =  express();
app.use(express.json());

app.use('/user', UserRouter)
app.use('/chat', ChatRouter)
app.use('/td', TravelDetailsRouter)
app.use('/tips', TravelTipsRouter)
app.use('/location', LocationRouter)

app.listen(3000,(err)=>{
    console.log("Server running on port 3000")
})