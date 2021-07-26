import React,{Component} from 'react';
import { Button, FormGroup, FormControl} from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Logout.css';


import './Contactus.css';

class Counselling extends Component{
  constructor(props) {
    super(props)

    this.state = {
      _id:"",
      a: "",
      b: "",
      c: "",
      d: "",
    }
  }
  valid(item,type)
  {
  
    let itemValue=item.target.value;
    switch(type)
    {
      case "_id":{
        this.setState({_id:itemValue})
      }
      case "a":{
        this.setState({a:itemValue})
      }
      case "b":{
        this.setState({b:itemValue})
      }
      case "c":{
        this.setState({c:itemValue})
      }
      case "d":{
        this.setState({d:itemValue})
      }
    }
  }

submit()
{
let obj={}
obj._id=this.state._id;
obj.a=this.state.a;
obj.b=this.state.b;
obj.c=this.state.c;
obj.d=this.state.d;
alert("Created");
console.warn("submit data",obj)


const{ _id,a,b,c,d}=this.state;

axios.post('http://localhost:3001/api/counselling/create',{_id,a,b,c,d})
.then(result => 
  {
    
    console.log(result.data);
  }
  );
}



  validateForm() {
    return (this.state.b == "BCIIT" || this.state.b == "MERI" || this.state.b == "USIT") && (this.state.c == "BCIIT" || this.state.c == "MERI" || this.state.c == "USIT") && (this.state.d == "BCIIT" || this.state.d == "MERI" || this.state.d == "USIT" );

  }
  validate() {
    return this.state.d == 1 || this.state.d == 2 || this.state.d == 3;

  }
    render() {
        return(
          <div>
   
<div class="container">
  
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
  <div class="con">
  
  

<center><h1><u><b>COUNSELLING FORM</b></u></h1></center>
<div className="Login">

<form>
          <FormGroup controlId="username" bsSize="large">
          
            <p>ROLL NO:</p>
            <FormControl
              autoFocus
               id="area"
             
              onChange={(item)=>this.valid(item,"_id")}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <p>RANK</p>
            <FormControl
              
              onChange={(item)=>this.valid(item,"a")}
                id="area"
            />
          </FormGroup><br/>
          <FormGroup controlId="password" bsSize="large">
          <p><b><u>LIST OF COLLEGES</u></b></p>
          <p><b>- BCIIT</b></p>
          <p><b>- MERI</b></p>
          <p><b>- USIT</b></p><br/>
            <p>1ST PRIORITY</p>
            <FormControl
             
              onChange={(item)=>this.valid(item,"b")}
                id="area"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <p>2ND PRIORITY</p>
            <FormControl
            
              onChange={(item)=>this.valid(item,"c")}
                id="area"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <p>3RD PRIORITY</p>
            <FormControl
             
              onChange={(item)=>this.valid(item,"d")}
                id="area"
            />
          </FormGroup>
          <div>
          <Link to="/Submit">
          <Button
            block
            bsSize="large"
            onClick={()=>this.submit()}
            disabled={!this.validateForm()}
            type="submit">Submit</Button>
        </Link>
            
            </div>


            
        </form>
      </div>
      </div>
  </div>
</div>
    );
}
}
export default Counselling;