
let bodyParser = require("body-parser");
let express = require('express');
var cors = require('cors');
var exp = express();
const con = require("../client/dbConnection");

const PORT = process.env.PORT || 8002;
const mysql = require("mysql");
exp.use(cors())
exp.use(express.json());
exp.use(bodyParser.urlencoded({ extended: false }));

exp.post('/client',function(req,res){
 
    var values=[[req.body.nom,req.body.prenom,req.body.email,req.body.tel]]
    let nom = req.body.nom
    let prenom = req.body.prenom
    let email=req.body.email
    let tel=req.body.tel
    
    con.query("SELECT * FROM profils WHERE email="+mysql.escape(email), function (err, result, fields) {
                if (err) throw err;
                if( result.length!=0|| isNaN(tel)==true|| isNaN(prenom)==false || isNaN(nom)==false 
                || nom.length <1 || nom.length>32 || prenom.length<1 || prenom.length >32 
                ||tel.length<7 )
                {
                 console.log("email existe or long est invalide ")
                }
             
                 else {
                    
                           const sql="INSERT INTO profils (nom,prenom,email,tel) VALUES ?";
                          con.query(sql,[values], function (err, result, fields) {
                            console.log(values)
                            
                            if (err) throw err;
                          
                            
                           console.log("Number of rows affected : " + result.affectedRows);
                } )
              
              }

})});
exp.listen(PORT,()=>console.log("server running"));



  
   
//    console.log( nom.charCodeAt(0))
    
    //     let i=0;
    //     let verif=true;
    //     while (verif==false || prenom.length<i+1)
    //     {
    //      if((prenom.charCodeAt(i)>64) && (prenom.charCodeAt(i)<92))
    //      {
    //          i=i+1;
    //      }
    //      else {
    //          verif=false;
    //      }
    //     }
      
      
    //   let j=0;
    //   let verif1=true;
    //   while (verif1==false || nom.length<j+1)
    //   {
    //    if((nom.charCodeAt(j)>64) && (nom.charCodeAt(j)<92))
    //    {
    //        j=j+1;
    //    }
    //    else {
    //        verif1=false;
    //    }
    //   }
    // let k=0
    //  if ( verif==false) {
    //     console.log('verifier prenom ');
    //     k=k+1;
    //  }
    //  if (verif1==false){
    //     console.log('verifier nom')
    //     k=k+1;
    //  }
