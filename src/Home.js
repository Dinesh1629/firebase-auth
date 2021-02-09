import React from 'react';
import fire from './config/fire';




class Home extends React.Component{



    logout(){
        fire.auth().signOut();

    }




    
render(){
    return(
        <div >
       <div>
           <h1>You have logged in:</h1>
       </div>
        
        <div>
            <button onClick={this.logout}>Logout</button>
           
        </div>
        </div>
    )
};
}


export default Home;