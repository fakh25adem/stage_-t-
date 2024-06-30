const express = require('express');
const app =express();
const cors=require('cors');


app.use(cors());
app.use(express.json());
const con = require("../client/dbConnection");



app.get('/employees',(req,res) => {

    con.query("SELECT * FROM profils WHERE id_profil=1 ",  (err,result) =>
    {
        if(err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.listen(3005,()=>{
    console.log("yey, your servver is running")
})