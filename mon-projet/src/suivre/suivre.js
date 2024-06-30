import React  from "react";
import logo from './user.png';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {useState} from "react";
import Axios from 'axios';
import './suivre.css';

function Suivre(){
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
    Axios.get("http://localhost:3006/suivi").then((response) => {
      setEmployeeList(response.data)
 
    })
  
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
                   <h3 > Suivi </h3>
                   </div>
                    <div className='aligns'>
                        
                        <img className='img' src={logo}/>
                        <input type='text' className='input' placeholder='Nom medecin'/>
                    </div>
                </div>
                <div>
        <div>
        <br></br>   <br></br>   <br></br>   <br></br>
      
        <table className="tab"   >
        <tr>
        <th>ID</th>
        <th>Objet</th>
        <th>Priorité</th>
        <th>Statut</th>
        <th>Date de reclamation</th>
        <th>Satisfaction</th>
        <th>Facture</th>
        <th>technicien</th>
        <th>Date de cloture</th>
        
      
         </tr>
         {employeeList.map((val,key)=>{
            return <tr>
                 <td>{val.id_suivi}</td>
        <td>{val.objet}</td>
        <td>{val.priorité}</td>
        <td>{val.statut}</td>
        <td>{val.date}</td>
        <td>{val.satisfaction}</td>
      
        <td>{val.facture}</td>
        <td>{val.technicien}</td>
        <td>{val.date_cloturé}</td>
            </tr>
         })}
          
        </table>
        <button className="butn suivi" onClick={getEmployees}>Get Suivi</button> 
       
        </div>
       </div>

            </div>
               
       </div>
     
     
      
{/*              
           <div className='donnee'>    
               
           <div className='border' >
       
   
              <h2 className='h2'>Donnée personnelle</h2>
            
             
       
           <label className='label' for="">Nom</label> <input className='text'    type="text" 
           / >
           
           <label className='label' for="">Prenom</label> <input className='text' type="text" 
   / >
            <br/>
            <label className='label' for="">Date de naissance</label> <input className='text'  type="text"   
            / >
            <br/>
            <label className='label' for="">Telephone</label> <input className='text' type="text" 
            / > 
            <br></br>
            <h2 className='h2'>Donnée professionnelle</h2>
       
       <label className='label' for="">E-mail</label> <input className='text' type="text"/ >
       <br></br>
       <label className='label' for="">Nom centre</label> <input className='text' type="text"  / >
        <br/>
        <label className='label' for="">Adresse centre</label> <input className='text' type="text"
        
           / >
        <br/>
      
        <label className='label'  for="">Licence</label> <input disabled="disabled" className='text dis' value='info' type="text"
          / > 
        <br></br>
        <button className='butn'>Valider</button>
        <button className='butn' type='reset'>Annuler</button>
      
     
    
        <button onClick={getEmployees}>Get employees</button> 
       
      </div>
           
      </div>
    
        <p>{noms}</p>
         */}
       
</div>    

    )
    };
    
export default Suivre;

