const con = require("../client/dbConnection");
const express = require("express");
let body = require("body-parser");
const PORT = process.env.PORT || 8003;
var cors = require('cors');
var expr = express();
con.connect();
expr.use(cors())
expr.use(express.json());
expr.use(body.urlencoded({ extended: false }));
expr.post('/profil',function(req,res){
    var values = [[
        req.body.name,
        req.body.prenom,
        req.body.email,
        req.body.tel,
        req.body.ncentre,
        req.body.adrcentre,
        req.body.lic,
        req.body.datenais,
    
]]
let name=req.body.name;
let prenom=req.body.prenom;
let email=req.body.email;
let tel =req.body.tel;
let centre=req.body.ncentre;
let adrcentre=req.body.adrcentre;
// let lic = req.body.lic;
let datenais = req.body.datenais;
if( isNaN(tel)==true|| isNaN(prenom)==false || isNaN(name)==false ||
 isNaN(centre)==false || isNaN(adrcentre)==false|| isNaN(datenais)==false || 
 name.length <1 || name.length>32 || prenom.length<1 || prenom.length >32 ||
  centre.length <1 || centre.length>35 || adrcentre.length<1 || adrcentre.length >50 )   
{
 console.log('eroor')
}
       else {
        var sql = "UPDATE profils SET nom = ?, prenom= ?, date_naissance= ?,email = ?,tel = ?,nom_centre = ?,adrcentre= ?  WHERE id_profil= 1 " ;
  con.query(sql,[name,prenom,datenais,email,tel,centre,adrcentre] ,function (err, result, fields) {
    console.log(values)
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    
    console.log("Number of rows affected : " + result.affectedRows);
       }
  )}})
expr.listen(PORT,()=>console.log("server running"))