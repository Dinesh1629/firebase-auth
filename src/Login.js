import React from 'react';
import fire from './config/fire';
import './App.css';
import { Form, Button } from 'bootstrap';

 


class Login extends React.Component{



    login(){
       const email= document.querySelector("#email").value;
       const password= document.querySelector("#password").value;

       fire.auth().signInWithEmailAndPassword(email,password)
       .then((u) => {
         console.log("Successfully logged in");
       })
       .catch((err) =>{
           console.log("Error "+err.tostring());
       })
    }


    signup(){

        const email= document.querySelector("#email").value;
       const password= document.querySelector("#password").value;

       fire.auth().createUserWithEmailAndPassword(email,password)
       .then((u) => {
         console.log("Successfully signed in");
       })
       .catch((err) =>{
           console.log("Error "+err.tostring());
       })
    }



render(){
    return(
        <div style={{textAlign:'center'}} class="main">
        <div>
            <label ><b>Email Id : </b></label>
        <input type="text" placeholder="Enter Email id" id="email" required />
        </div>
        <br />
        <div>
           <label ><b>Password : </b></label>
        <input type="password" placeholder="Enter Password" id="password" required />
        </div> 
        <br />       
        <div>
            <button onClick={this.login}>Login</button>
            <button onClick={this.signup}>Signup</button>
        </div>
        </div> 

    )
};
}


export default Login;