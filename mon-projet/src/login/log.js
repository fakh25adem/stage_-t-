
import React from 'react';
import './log.css'
import { useState } from 'react';
import Axios from 'axios';
import medix from './medix-4.png';
 function Login() {

 
  const [data, setData] = useState({
    id: "",
    mdp: "",
  
  });
  // const handleClick=()=>{
  //   nav("/profil")
  // }
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
      id: data.id,
      mdp: data.mdp,
     
        };
        Axios.post('http://localhost:8080/login', userData).then(() => {
          
        });
      };
  return (
   
 <div class='login' id='login'>
  <div class='head'>
  <center>  <img class="image" src={medix} alt=""/></center> 
  </div>
 <b> <p class='msg'>S'identifier</p></b>
  <div class='form'>
    <form onSubmit={handleSubmit}>
    <div className='pas'>
  <input type="text" placeholder='Username' class='user' id='username' name='id'  value={data.id}
        onChange={handleChange} />
  <br/> 
  
  <input type="password" placeholder='••••••••••••••' class='password' name='mdp'value={data.mdp}
        onChange={handleChange}/>
        </div>
  <br/>
  
  <div className='btnn'>
  <button type='submit' className='cnx' >conxexion</button>
  <button className='btn-login '><a href="creer" className='a' id='do-login'>Creer un compte</a></button>
  </div>

    </form>
  </div>
</div>
    );
 

}
export default Login;