import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
// import {Link} from 'react-dom';
// import Gp from './Gp';
import { Button, FormGroup, FormControl} from "react-bootstrap";
//import "./Login.css";
//import Main from './Main';
import { BrowserRouter, Route, Switch, Redirect,Link } from 'react-router-dom';


import './Contactus.css';

class Pay extends Component{
  constructor(props) {
    super(props)

    this.state = {
      a: "",
     
    }
  }
  valid(item,type)
  {
  
    let itemValue=item.target.value;
    switch(type)
    {
      case "a":{
        this.setState({a:itemValue})
      }
     
    }
  }

submit()
{
let obj={}
obj.a=this.state.a;

console.warn("submit data",obj)
}

  validateForm() {
    return (this.state.a == 1000 );
  }
    render() {
        return(
          <div class="container">
 
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
      

  <div class="con">
<center><h1><u><b>COUNSELLING PAYMENT</b></u></h1></center><br/>
    
      
      <div className="Login">
        <form onSubmit={this.handleSubmit}>

        
          
          
          <FormGroup controlId="first" bsSize="large">
            <p><b>PAY AMOUNT (*RS 1000)</b></p>
            <FormControl
              autoFocus
              type="a" id="area"
              onChange={(item)=>this.valid(item,"a")}
            />
          </FormGroup>
          
          <div>
          <Link to="/Counselling">
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit">Submit</Button>
        
            </Link>
            </div>
        </form>
      </div>
      </div>
  </div>

    );
}
}
export default Pay;