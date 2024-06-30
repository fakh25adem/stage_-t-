import React from "react"
import './ajout.css'
import logo from './user.png';
import { useState } from 'react';
import Axios from "axios";
function Ajout(){
    
        const after = ()=>{
         
            document.querySelector(".reclamation").style.visibility=(window.getComputedStyle(document.querySelector('.reclamation')).visibility=='hidden') ? "visible" : "hidden";
            document.querySelector(".reclamation").style.marginTop=(window.getComputedStyle(document.querySelector('.reclamation')).marginTop=='0px') ? "-40px" : "0px";
        }  
        const after1 = ()=>{
         
            document.querySelector(".contrat").style.visibility=(window.getComputedStyle(document.querySelector('.contrat')).visibility=='hidden') ? "visible" : "hidden";
            document.querySelector(".contrat").style.marginTop=(window.getComputedStyle(document.querySelector('.contrat')).marginTop=='0px') ? "-40px" : "0px";
        }   
        const after2 = ()=>{
        
           
            document.querySelector(".doc").style.visibility=(window.getComputedStyle(document.querySelector('.doc')).visibility=='hidden') ? "visible" : "hidden";
            document.querySelector(".fich").style.marginTop=(window.getComputedStyle(document.querySelector('.fich')).marginTop=='0px') ? "-20px" : "0px";
            document.querySelector(".doc").style.marginTop=(window.getComputedStyle(document.querySelector('.doc')).marginTop=='0px') ? "-40px" : "0px";
        } 


  const [date, setdate] = useState("");
  const [objet, setobjet] = useState("");
  const [message, setmessage] = useState("");
  const [type, settype] = useState("");
  const [prio, setprio] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      date: date,
      objet: objet,
      message: message,
      type:type,
      prio:prio
    
        };
        Axios.post('http://localhost:8001/rec', userData).then(() => {
          
        });
      };
      
    //   document.getElementById('date').value = datenow;
        //   const handleChange = (e) => {
        //     const value = e.target.value;
        //     setData({
        //       ...donne,
        //       [e.target.name]: value
        //     });
        //   };
            // const handleSubmit = (e) => {
            //   e.preventDefault();
            //   const userData = {
            //     date: donne.date,
            //     objet: donne.objet,
            //     message: donne.message,
            //     // tel:data.tel 
            //       };
            //       Axios.post('http://localhost:8001/reclamation', userData).then(() => {
            
            //     });
            //   };
    
    return(
    <div class="block">
        <div class="dessin">
                 <center>  <img class="image" src={logo}  alt=""/></center> 
                    <h2 class="centre">center</h2>
                    <hr/>
                    <a href="Dash"><span >Dasbord </span></a>
                    <hr/>
                    <a href="Profil"><span class="profil">Profil </span></a>
                    <hr/>
                    <span>interface :</span>
                    <br/>
                    <span class="h3 hov" onClick={after} >Gestion de reclamation</span>
                    <br/>
                    
                    <div class="reclamation">
                   
                    <a href="Ajout"><span class="ajout">{'>'}Ajouter une prestation</span></a>
                        <br/>
                        <a href="Suivi"><span class="ajout">{">"}Suivi de prestation </span></a>
                    </div>
                    
                    <span class="doc2 hov" onClick={after2}>Documentation</span>
                    <br/>
                <div className='doc'>

               
                    <span class="mcon hov" onClick={after1}>Mes contrats</span>
                    <br/>
                  
                    <div className='contrat'>
                    <span class="cm">{">"} Contrat de maintenance</span>
                    <br/>
                    <span class="cl"> {">"} Contrat de licence</span>
                    </div>
                    <br/>
                    <div className='fich'>  <span class="fichier mcon"> Fichier d'interventions</span> </div>
                    </div>
                  


        </div>
        <div class="blo"> 
               <div className='nav'>
               <div className='navborder'>
                   <div className='ligne1' >
                   <h3 > Ajouter une prestation</h3>
                   </div>
                    <div className='align1'>
                        
                        <img className='img' src={logo}/>
                        <input type='text' className='input' placeholder='Nom medecin'/>
                    </div>
                    </div>
    

               </div>
                <div>
         <div>
            <br></br>  <br></br>
        
      <form className="form"   >
       
       <br/>    
               <label className="Type">Date de reclamation</label>

            
            <div className="decaler">
                <input className="tytext" type="date" id="date" 
                  onChange={(e)=>{
                    setdate(e.target.value)} }
                  />
                </div>
                <br/>

                <div className="decaler1">
                <select className="select" value={type}  onChange={(e)=>{
                 settype(e.target.value)} }>
                    <option >Type</option>
                    <option >commentaires</option>
                    <option >renseignements</option>
                    <option >Réclamations</option>
                    <option >incidents</option>
                </select>
            
           
               
                <select className="select1" value={prio}  onChange={(e)=>{
                setprio(e.target.value)}} >
                    <option >Priorité</option>
                    <option >normal</option>
                    <option >important</option>
                    <option >urgent</option>
                    <option >critiques</option>
                
                </select>
                </div> 
                <br></br>
          <div>
              <input type="text" className="objets" placeholder="Objet"  onChange={(e)=>{
        setobjet(e.target.value)}}
        />
        </div>
         <br></br>
         <br></br>

         
            <div>
                   <textarea name="" id="" cols="30" rows="10" 
          onChange={(e)=>{
            setmessage(e.target.value)
            }}></textarea>
                
        </div>
       

             <input type="file" className="file" name="file"   
         />
        
        <br></br>   <br></br>
       <div className="dec">
    
       <button className='butn ' type="submit" onClick={handleSubmit} > Valider</button>
       <button className='butn ' type="reset">Anuller</button> 
       
       </div>
     
   </form>
   
   </div>
   
</div>
</div>
</div>

      
     
    )
}
export default Ajout;