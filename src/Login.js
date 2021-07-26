import React, { Component } from "react";
import { Button, FormGroup, FormControl} from "react-bootstrap";
import "./Login.css";
import axios from 'axios';


class Login extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      _id: "",
      password: "",
      fetchData:[]
    }
  }

valid(item,type)
    {
      let itemValue=item.target.value
   
        switch(type)
        {
            case "_id":
                {
                  this.setState({_id:itemValue});
                 }
            case "password":
                {
                   this.setState({password:itemValue});
                }
                                   
        }
    
    
     }
componentDidMount()
{
 axios.get('http://localhost:3001/api/user/retrieve')
 .then((res) => 
   {
     this.setState({fetchData:res.data.result});

   });
}
// submit()
// {

//   const { history } = this.props;
  
//                               this.state.fetchData.map((dbdata,index)=>{
                              
                              
//                                 if(dbdata.username === this.state.username && dbdata.password === this.state.password)
//                                 {
//                                     history.push('/Gp')
//                                 }
//                                 else
//                                 {
//                                   history.push('/Gp')

//                                 }
                                 
                                    
                                  
                               
//                               });
                              

                            
// } 
submit()
{
  const {history} = this.props;
                                
  this.state.fetchData.map((dbdata,index)=>{
    // console.log("**************");
    // console.log(dbdata._id);
    // console.log(this.state._id);
    // alert("hello");
    return (dbdata._id === this.state._id && dbdata.password === this.state.password) ?
    
      history.push('/Gp')
        // alert("SUBMITTED");
    :  
      history.push('/Login')
    
  }); 
}
  
  render() {
    return (
      <div class="bgimg">
     
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
  
      
      <div className="Log">
        <form>

        <h1>MEMBER LOGIN</h1>
          <FormGroup controlId="_id" bsSize="large">
          
            <p>Username</p>
            <FormControl
              autoFocus
              type="_id" id="area"
              // value={this.state.username}
              onChange={(item)=>this.valid(item,"_id")}
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
          
          <Button
            block
            bsSize="large"
            onClick={()=>this.submit()}
            type="submit">Submit</Button>
        
            
            </div>
    
            </form>
            

            
        
      </div>
      </div>
    );
  }
}

export default Login;