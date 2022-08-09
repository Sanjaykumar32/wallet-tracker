const express = require('express')
const mongoose = require('mongoose')
const bodyperser = require("body-parser")
const cors = require('cors')
const  server = express();


mongoose.connect('mongodb+srv://sanjay:87199032@cluster0.4osey.mongodb.net/Wallet').then(()=>{
    console.log("mongodb conected")
}).catch((error)=>{
    console.log(error);
})


const mongooseSchema =  new mongoose.Schema({
    amount:Number,
    name: String,
    totalAmount:String,
    id: String,
})


const mongodbData = mongoose.model('Wallet' , mongooseSchema) 

server.use(bodyperser.json());
server.use(cors());

server.post('/create' , async (req , res)=>{
    const {name , amount , totalAmount ,id} = req.body
    try {
      await  mongodbData.create({name , amount , totalAmount  , id})
        res.send(req.body)
    } catch (error) {
        res.send(error)
    }
})



server.listen(8000 , (()=>{
    console.log("wallet tracker start")
}))