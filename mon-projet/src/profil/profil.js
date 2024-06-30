
import logo from './user.png';
import React from 'react';
import './profil.css'
import {useState} from "react";
import Axios from 'axios';

function Profil(){
 
 

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
    const [employeeList,setEmployeeList]=useState([]);
   
    
  const getEmployees = () => {
    Axios.get("http://localhost:3005/employees").then((response) => {
      setEmployeeList(response.data)
 
    })
    {employeeList.map((val,key) =>{
     {setname(val.nom)}
     {setprenom(val.prenom)}
     {setEmail(val.email)}
     {settel(val.tel)}
     {setdatenais(val.date_naissance)}
     {setcentre(val.nom_centre)}
     {setadrcentre(val.adrcentre)}
  
     
    })}
  }
  const [name, setname] = useState("");
  const [prenom, setprenom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, settel] = useState("");
  const [adrcentre, setadrcentre] = useState("");
  const [datenais, setdatenais] = useState("");
  const [ncentre, setcentre] = useState("");
  const [lic, setlic] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      prenom:prenom,
      email:email,
      tel:tel,
      adrcentre:adrcentre,
      datenais:datenais,
      ncentre:ncentre,
      lic:lic
    
        };
        Axios.post('http://localhost:8003/profil', userData).then(() => {
          
        });
      }; 
    return (
     
   
    <div class="block">
        <div class="dessinp">
                 <center>  <img class="image" src={logo} alt=""/></center> 
                    <h2 class="centre">center</h2>
                    <hr/>
                    <a href="Dash"><span >Dashbord </span></a>
                    <hr/>
                    <a href="Profil"><span class="profil">Profil </span></a>
                    <hr/>
                    <span>interface :</span>
                    <br/>
                    <span class="h3 hov" onClick={after} >Gestion de reclamation</span>
                    <br/>
                    
                    <div class="reclamation">
                   
                     <a href="Ajout"><span class="ajout">  {'>'} Ajouter une prestation </span></a>
                        <br/>
                        <a href="Suivi"><span class="ajout">  {'>'} Suivi de reclamation</span></a>
                    </div>
                    
                    <span class="doc2 hov" onClick={after2}>Documentation</span>
                    <br/>
                <div className='doc'>

               
                    <span class="mcon hov" onClick={after1}>Mes contrats</span>
                    <br/>
                  
                    <div className='contrat'>
                    <span class="ki"> {'>'} Contrat de maintenance</span>
                    <br/>
                    <span class="ki">  {'>'} Contrat de licence</span>
                    </div>
                    <br/>
                    <div className='fich'>  <span class="fichier mcon"> Fichier d'interventions</span> </div>
                    </div>
                  


        </div>
        <div class="blo"> 
               <div className='nav'>
                 <div className='navborder'>
                   <div className='ligne' >
                   <h3 > Profil</h3>
                   </div>
                    <div className='align2'>
                        
                        <img className='img' src={logo}/>
                        <input type='text' className='input' placeholder='Nom medecin'/>
                    </div>
                </div>
    
    <center>

    <form onSubmit={handleSubmit} >       
           <div className='donnee'>    
               
           <div className='border' >
       
   
              <h2 className='h2'>Donnée personnelle</h2>
            
             
       
           <label className='label' for="">Nom</label> <input className='text' value={name}   type="text" 
           onChange={(e)=>{
            setname(e.target.value)}}/ >
           
           <label className='label' for="">Prenom</label> <input className='text' type="text" value={prenom}  
           onChange={(e)=>{
            setprenom(e.target.value)}}/ >
            <br/>
            <label className='label' for="">Date de naissance</label> <input className='text'  type="text" value={datenais}  
              onChange={(e)=>{
                setdatenais(e.target.value)}}/ >
            <br/>
            <label className='label' for="">Telephone</label> <input className='text' type="text"value={tel} 
              onChange={(e)=>{
                settel(e.target.value)}}/> 
            <br></br>
            <h2 className='h2'>Donnée professionnelle</h2>
       
       <label className='label' for="">E-mail</label> 

       <input className='text' type="text" 
        value={email} 
        onChange={(e)=>{
          setEmail(e.target.value)}}   />
       <br></br>
       <label className='label' for="">Nom centre</label> <input className='text' type="text"value={ncentre}  
        onChange={(e)=>{
            setcentre(e.target.value)}}/>
        <br/>
        <label className='label' for="">Adresse centre</label> <input className='text' type="text" value={adrcentre} 
          onChange={(e)=>{
            setadrcentre(e.target.value)}}/>
        <br/>
      
        <label className='label'  for="">Licence</label> <input disabled="disabled" className='text dis' value='info' type="text" 
          onChange={(e)=>{
            setlic(e.target.value)}}/> 
        <br></br>
        <button className='butn'>Valider</button>
        <button className='butn' type='reset'>Annuler</button>
      
     
    
        <button onClick={getEmployees}>Get Profil</button> 
       
      </div>
           
      </div>
      </form>
      </center>
      </div>
    
    
    
   </div>
    </div>
    
)}
    

 

    
export default Profil;
