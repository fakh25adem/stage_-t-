const express = require('express');
const app =express();
const cors=require('cors');


app.use(cors());
app.use(express.json());
const con = require("../client/dbConnection");



app.get('/suivi',(req,res) => {

    con.query("SELECT * FROM suivi ",  (err,result) =>
    {
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.listen(3006,()=>{
    console.log("yey, your servver is running")
})