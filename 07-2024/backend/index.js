require("dotenv").config();
require("./dbconfig");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.SERVER_PORT;


app.use(cors({
    origin:"http://localhost:5173/",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json("server start")
});

app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`);
})