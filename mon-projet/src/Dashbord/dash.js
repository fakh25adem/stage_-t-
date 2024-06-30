
import './dash.css';
import logo from './user.png';
import React,{ Component } from 'react';



function Dash(){
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
    
    
   
   
    



    
 
    return (
     
   
    <div class="block">
        <div class="dessin">
                 <center>  <img class="image" src={logo} alt=""/></center> 
                    <h2 class="centre">center</h2>
                    <hr/>
                    <a href="Dash"><span >Dasbord </span></a>
                    <hr/>
                    <a href="Profil "><span class="profil">Profil </span></a>
                    <hr/>
                    <span>interface :</span>
                    <br/>
                    <span class="h3 hov" onClick={after} >Gestion de reclamation</span>
                    <br/>
                    
                    <div class="reclamation">
                   
                     <a href="Ajout"><span class="ajout">{'>'} Ajouter une prestation </span></a>
                        <br/>
                        <a href="Suivi"><span class="">  {'>'} Suivi de reclamation </span></a>
                    </div>
                    
                    <span class="doc2 hov" onClick={after2}>Documentation</span>
                    <br/>
                <div className='doc'>

               
                    <span class="mcon hov" onClick={after1}>Mes contrats</span>
                    <br/>
                  
                    <div className='contrat'>
                    <span class="ki"> {">"} Contrat de maintenance</span>
                    <br/>
                    <span class="ki"> {">"} Contrat de licence</span>
                    </div>
                    <br/>
                    <div className='fich'>  <span class="fichier mcon"> Fichier d'interventions</span> </div>
                    </div>
                  


        </div>
        <div class="blo"> 
               <div className='nav'>
               <div className='navborder'>
                   <div className='ligne' >
                   <h3 > Dashbord</h3>
                   </div>
                    <div className='align'>
                        
                        <img className='img' src={logo}/>
                        <input type='text' className='input' placeholder='Nom medecin'/>
                    </div>
                    </div>
    

               </div>
               
       </div>
</div>    

    )
    };
    
export default Dash;

