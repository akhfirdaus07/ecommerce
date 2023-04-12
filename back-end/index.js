const express=require("express");
const app=express();
const db=require("./models");
const cors=require("cors");
const dotenv=require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());

app.listen(proces.env.PORT, ()=>{
    console.log(`server running at port :${process.env.PORT}.....`)
})