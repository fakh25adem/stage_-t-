let bodyParser = require("body-parser");
let express = require('express');
var cors = require('cors');
var exp = express();
const con = require("../client/dbConnection");
const PORT = process.env.PORT || 8080;
exp.use(cors())
exp.use(express.json());
exp.use(bodyParser.urlencoded({ extended: false }));

exp.post('/login',function(req,res){
  
   
    let id = req.body.id
    let mdp = req.body.mdp
    console.log(id);
    console.log(mdp);
   
    
    const sql = ("SELECT id_profil,mdp FROM profils WHERE id_profil=? and mdp=? ");
        con.query(sql,[id,mdp], function (err, result, fields) {
           console.log(result);
            
            if (err) throw err;
                if( result.length==0)
                {
                 console.log("mot de passe or Id invalide ")
                }
             
                 else {
                    console.log(" identification validé")
                    
                } 
              
              })})

;
exp.listen(PORT,()=>console.log("server running"));
