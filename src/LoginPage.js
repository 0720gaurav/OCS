import React, { Component } from "react";
import { Button, FormGroup, FormControl} from "react-bootstrap";
import "./Login.css";
import axios from 'axios';


class LoginPage extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: ""
    }
  }
  valid(item,type)
    {
      let itemValue=item.target.value
   
        switch(type)
        {
            case "username":
                {
                  this.setState({username:itemValue});
                 }
            case "password":
                {
                   this.setState({password:itemValue});
                }
                                   
        }
    
    
     }

   
  
submit()
{
return  this.state.username == "gauravu18@mail.com" && this.state.password == "gauravu18"
                  
} 


  
  render() {
    return (
      <div class="bgimg">
     
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
  
      
      <div className="Log">
        <form>

        <h1>ADMIN LOGIN</h1>
          <FormGroup controlId="username" bsSize="large">
          
            <p>Username</p>
            <FormControl
              autoFocus
              type="username" id="area"
              // value={this.state.username}
              onChange={(item)=>this.valid(item,"username")}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <p>Password</p>
            <FormControl
              // value={this.state.password}
              onChange={(item)=>this.valid(item,"password")}
              type="password" id="area"
            />
          </FormGroup>
          <div>
          
          <Button formAction='/Get'
            block
            bsSize="large"
            disabled={!this.submit()}
            type="submit">Submit</Button>
        
            
            </div>
    
            </form>
            

            
        
      </div>
      </div>
    );
  }
}

export default LoginPage;