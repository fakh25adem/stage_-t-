const con = require("../client/dbConnection");
const express = require("express");
const mysql = require("mysql");
let body = require("body-parser");
const PORT = process.env.PORT || 8001;

var cors = require('cors');
var expr = express();
con.connect();
expr.use(cors())
expr.use(express.json());
expr.use(body.urlencoded({ extended: false }));

  

expr.post('/rec',function(req,res){
    var values = [[
        req.body.date,
        req.body.objet,
        req.body.message,
        req.body.type,
        req.body.prio,
        "1"]]
        var value = [[
          req.body.objet,
          req.body.prio,
          "en attente",
          req.body.date,
          "1"
          
         
          ]]
        let datenow = new Date() 
        let jour = datenow.getDate()
        let mois = datenow.getMonth()+1
        if (jour<10)
        {
          jour='0'+jour;
        }
        if (mois<10 )
        {
          mois='0'+mois;
        }
        let year = datenow.getFullYear()+'-'+mois+'-'+ jour

  
      
      
       if( req.body.date!=year || req.body.objet.length <1 || req.body.objet.length>80 || req.body.message.length<1 || req.body.message.length >1000 )
       {
        console.log('eroor')
        
       }
       else
        if (req.body.type !='Réclamations') {
        const sql="INSERT INTO prestations (date,type,priorité,objet,commentaire,id_profil) VALUES ?";
  con.query(sql,[values], function (err, result, fields) {
    console.log(values)
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
  
    
    console.log("Number of rows affected : " + result.affectedRows);
  }) } 
  else {
    const sql="INSERT INTO prestations (date,type,priorité,objet,commentaire,id_profil) VALUES ?";
    con.query(sql,[values], function (err, result, fields) {
      console.log(values)
      // if any error while executing above query, throw error
      if (err) throw err;
      // if there is no error, you have the result
  
    const db="INSERT INTO suivi (objet,priorité,statut,date,id_profil) VALUES ?";
    con.query(db,[value], function (err, result, fields) {
      console.log(value)
      // if any error while executing above query, throw error
      if (err) throw err;
      // if there is no error, you have the result
      
      console.log("Number of rows affected : " + result.affectedRows);
       }
    )
      })}
    })
    
  
expr.listen(PORT,()=>console.log("server running"))

