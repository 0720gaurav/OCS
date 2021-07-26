import React from 'react';
import axios from 'axios';
import { Button, FormGroup, FormControl} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Logout.css';

class Submit extends React.Component{
  constructor(props){
    super(props)
    this.state={
      fetchData:[],
      fetch:[],
      _id:"",
      a: "",
      b: "",
      c: "",
      d: "",
      clg: ""
   
    };
  }


  valid(item,type)
  {
   
    this.state._id=item.target.value
  }
  submit(){

                            axios.get('http://localhost:3001/api/get/retrieve')
                            .then((res) => 
                              {
                                this.setState({fetch:res.data.result});

                              });

                              axios.get('http://localhost:3001/api/counselling/retrieve')
                            .then((res) => 
                              {
                                this.setState({fetchData:res.data.result});

                              });
          }

render()
{

  return(
<div class="container">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/> 
<Link to="/"> 
<button type="submit" id="logout" class="btn btn-success">LOGOUT</button>
</Link>
<div className="Login">


  <form>
          <FormGroup controlId="eno" bsSize="large">
          
            <p>ROLL NO:</p>
            <FormControl
              autoFocus
               id="area"
              // value={this.state.username}
              onChange={(item)=>this.valid(item,"_id")}
            />
          </FormGroup>
        
     <div>
          <Link to="/Submit">
          <Button
            block
            bsSize="large"
            onClick={()=>this.submit()}
            //disabled={!this.validateForm()}
            type="submit">Submit</Button>
        </Link>
            
    </div>


            
 </form>
</div>
<div>
{
          this.state.fetchData.map((dbdata,index)=>{
            console.log("**************");
            console.log(dbdata._id);
            console.log(this.state._id);
            return ((dbdata._id === this.state._id) ?
           
            <table className="table table-light table striped table hover">
              <thead>
              <tr class="table-success">
              <th>ENROLLMENT NO.</th>
              <th>RANK</th>
              <th>1ST PRIORITY</th>
              <th>2ND PRIORITY</th>
              <th>3RD PRIORITY</th>

              </tr>
              </thead>
                <tr class="table-warning">
                
          <td>{dbdata._id}</td> 
          <td>{dbdata.a}</td> 
          <td>{dbdata.b}</td> 
          <td>{dbdata.c}</td> 
          <td>{dbdata.d}</td>
          
                </tr>
              </table>  


              
              :
          <p></p>
          )
          })
          
          }

                              
                        
      </div>
      <div>
{
          this.state.fetch.map((dbdata,index)=>{
            
            return (dbdata._id === this.state._id) ?
           
            <table className="table table-light table striped table hover">
              <thead>
              <tr class="table-success">
              <th>ENROLLMENT NO.</th>
              <th>COLLEGE ALLOTED</th>
             

              </tr>
              </thead>
                <tr class="table-warning">
                
                <td>{dbdata._id}</td> 
                <td>{dbdata.clg}</td> 
   
                </tr>
              </table>  


              
              :
          <p></p>
          })
          
          }

                              
                        
      </div>
      
</div>
);
}
}
export default Submit;