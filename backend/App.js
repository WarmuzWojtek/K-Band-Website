const express=require('express');
const cors =require('cors');
const bodyParser = require("body-parser")
const mongoose =require('mongoose');

require('dotenv').config();
 
const app=express();
const port = process.env.PORT||8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open',()=>{
  console.log("Mongo DB podłączone")  
})

const guestBookPostRouter = require('./routes/guestBookPosts');


app.use('/guestBookPosts', guestBookPostRouter);



app.listen(port, ()=> console.log(`server is listening on ${port}`));

