import React from 'react';
import './Register.css';
import './s.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { break } from '@babel/types';

class Register extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:"",
      dateofbirth:"",
      _id:"",
      password:"",
      confirmPassword:"",
      fetchData:[]
    }
  }
  valid(item,type)
  {
    
    let itemValue=item.target.value;
    switch(type)
    {
      case "name":
        {
        this.setState({name:itemValue }); 
        }
      case "dateofbirth":
        {
        this.setState({dateofbirth:itemValue});
        }
      case "_id":
        {
        this.setState({_id:itemValue});
        }
      case "password":
        {
        this.setState({password:itemValue});
        }
      case "confirmPassword":
        {
        this.setState({confirmPassword:itemValue});
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
//   let obj={}
//   obj.name=this.state.name;
//   obj.dateofbirth=this.state.dateofbirth;
//   obj._id=this.state._id;
//   obj.password=this.state.password;
//   obj.confirmPassword=this.state.confirmPassword;
//   const { history } = this.props;
//   const{ name,dateofbirth,_id,password,confirmPassword}=this.state;

//   axios.post('http://localhost:3001/api/user/create',{name,dateofbirth,_id,password,confirmPassword})
//                                   .then(result => 
//                                   {
//                                     console.log(result.data); 
//                                   }
//                                   );
//   // alert("wait"); 
//   //console.log(obj);
//                     //  return(        this.state.fetchData.map((dbdata)=>{
//                     //             console.log("**************");
//                     //             console.log(dbdata._id);
//                     //             console.log(this.state._id);
//                     //             if(dbdata._id === this.state._id)
//                     //             { 
//                     //               alert("USERNAME ALREADY EXIST");
                                  
//                     //               history.push('/Register');
//                     //              breakStatement;
                                  
//                     //             }
//                     //             else{
//                     //               history.push('/Login');
//                     //             }
//                     //           })
//                     //  );
//                     this.state.fetchData.map((dbdata)=>{
//                      if(dbdata._id === this.state._id){
//                       history.push('/Register');
//                      alert("USERNAME ALREADY EXIST");
                     
//                      }
//                       else{  
                        
//                         history.push('/Login');
//                         alert("SUCCESSFULLY REGISTERED");
//                      }});
                    
                  
                               

                            
// }

// submit()
// {
//   const { history } = this.props;
//   //  let obj={}
//   //     obj._id=this.state._id;
//   //     obj.password=this.state.password;
//   //     console.warn("value:" ,obj);
//         const {name,dateofbirth,_id,password,confirmPassword} = this.state;
//         axios.post('http://localhost:3001/api/user/create',{name,dateofbirth,_id,password,confirmPassword})
//           .then((result) => {
//             // this.props.history.push("/")
//             // this.setState({alertmessage:"Success"})
//             console.log(result.data);
//            }).catch(error=>{
//             // this.setState({alertmessage:"Error"})
           
//            })

//            this.state.fetchData.map((key)=>{

//            if(key._id === this.state._id) 
//             {
//                 //passing data
//                 // this.setState({flag:"true"});
//                 // alert("Valid Credentails...")
//                 history.push('/Login');
               
//             }
//             else
//             {
//              
//               // // this.setState({flag:"false"});
//               // // alert("Invalid Credentials...")
//               history.push('/Login');
//             }
            
             
             
//            });            
           


//   }
submit()
{
  let obj={}
obj._id=this.state._id;
obj.name=this.state.name;
obj.dateofbirth=this.state.dateofbirth;
obj.username=this.state.username;
obj.password=this.state.password;
obj.confirmPassword=this.state.confirmPassword;
console.log(obj);

const{ _id,name,dateofbirth,password,confirmPassword}=this.state;
const{history}=this.state;
                           this.state.fetchData.map((dbdata,index)=>{
                             console.log("**************");
                             console.log(dbdata._id);
                             console.log(this.state._id);
                             if (dbdata._id === this.state._id) 
                             {
                              alert("already registered")
                              history.push('/Register')
                             }
                            else
                            {
                          // history.push('/Login')
                          
                            axios.post('http://localhost:3001/api/user/create',{_id,name,dateofbirth,password,confirmPassword})
                                            .then(result => 
                                              {
                                                
                                                console.log(result.data);
                                              }
                                            );
                                            // history.push('/Login')
                             }
                           })
}

 render(){
    return(
      <div class="register">
          <div class="container">
            <center> <h1><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>REGISTRATION FORM</u></b></h1></center><br/><br/>
  <form class="was-validated">
    <div class="reg">
    <div class="form-group">
      <label for="name">Name:</label>&nbsp;&nbsp;
      <input type="text" class="form-control" id="name" name="name" placeholder="Enter name" onChange={(item)=>this.valid(item,"name")} name="name" required/>
    
    </div>
    <div class="form-group">
      <label for="dob">Date of Birth:</label>&nbsp;&nbsp;
      <input type="date" class="form-control" id="dob" name="dateofbirth" placeholder="Enter date of birth" onChange={(item)=>this.valid(item,"dateofbirth")} name="dateofbirth" required/>
      
    </div>
    <div class="form-group">
      <label for="_id">Username:</label>&nbsp;&nbsp;
      <input type="_id" class="form-control" id="uname" name="_id" placeholder="enter _id" onChange={(item)=>this.valid(item,"_id")} name="_id" required/>
    
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>&nbsp;&nbsp;
      <input type="password" class="form-control" id="pwd" name="password" placeholder="Enter password" onChange={(item)=>this.valid(item,"password")} name="password" required/>
  
    </div>
    <div class="form-group">
      <label for="cpwd"> Confirm Password:</label>&nbsp;&nbsp;
      <input type="password" class="form-control" id="cpwd" name="confirmPassword" placeholder="re-enter password" onChange={(item)=>this.valid(item,"confirmPassword")} name="confirmPassword" required/>
     
    </div>
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember" required/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I agree.
     
      </label>
    </div>
    
   <center><button onClick={()=>this.submit()} id= "b" class="btn btn-primary" href="">Submit</button>
   <Link to="/Login" id="loginlink">Login</Link></center>
   
    </div>
  </form>
</div>

</div>
  )
 }
}
export default Register;