import React from 'react';
import './creer.css'
import { useState } from 'react';
import Axios from "axios";
import medix from './medix-4.png';



function Create () {
  
  // const [nom, setnom] = useState("");
  // const [prenom, setprenom] = useState("");
  // const [email, setemail] = useState("");
  // const [tel, settel] = useState("");
  const [data, setData] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: ""
  });
  
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };
    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = {
        nom: data.nom,
        prenom: data.prenom,
        email: data.email,
        tel:data.tel 
          };
          Axios.post('http://localhost:8002/client', userData).then(() => {
            
          });
        };
    return (
        <div class='log' id='login'>
        <div class='head'>
        <center>  <img class="image" src={medix} alt=""/></center> 
        </div>
       <b> <p class='msg'>S'incrire</p></b>
        <div class='form'>
          <form onSubmit={handleSubmit} >
          <div className='pas'>
        <input type="text" placeholder='Nom' name='nom' class='tex' 
        id='name'  value={data.nom}
        onChange={handleChange} />
        <br/><br/>
        <input type="text" placeholder='Prenom' name='prenom' class='tex' 
        id='prenom'  value={data.prenom}
        onChange={handleChange}  />
        <br/>
        <input type="email" placeholder='Email' name='email' class='tex'
         id='email'  value={data.email}
         onChange={handleChange}   />
        
        <br/>
      
        <input type="text" placeholder='Telephone' name='tel' class='tex'
         id='tel'  value={data.tel}
         onChange={handleChange}  />
         </div>
        <br/>
        <br/>
        <div className='bn'>
          <center>
        <button type='submit' className='cnx'  >Creer un compte</button>
        </center>
        </div>
        {/* <h1>My favorite name is {nom}!</h1> */}
        {/* <input type="submit" placeholder='Nom' class='cnx' id='creer' /> */}
        {/* <a href="#" type="submit" class='cnx' id='do-login' onSubmit={handleSubmit} >Creer un compte</a> */}
      
          </form>
        </div>
      </div>
    );

}

export default Create;