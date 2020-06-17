const express = require('express');
const bodyParser = require('body-parser');
const nodemailer=require('nodemailer');

const app=express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

//Create Route

app.post('/api/ordernow',(req,res)=>{
    console.log(req.body)
})

const PORT=process.env.port || 3001

app.listen(PORT,()=>{
    console.log(`Server Listening on ${PORT}`)
})