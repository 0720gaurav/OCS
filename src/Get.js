import React from 'react';
import axios from 'axios';
import { Button, FormGroup, FormControl} from "react-bootstrap";
import { Link } from 'react-router-dom';


class Get extends React.Component{
    constructor(props){
        super(props)
        this.state={
          fetchData:[],
          _id:"",
          clg: ""
         
       
        };
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
              case "clg":
                  {
                     this.setState({clg:itemValue});
                  }
                                     
          }
      
      
       }
       submit()
       {
      
       const{ _id,clg}=this.state;
       
       axios.post('http://localhost:3001/api/get/create',{_id,clg})
       .then(result => 
         {
           
           console.log(result.data);
         }
         );
       }
       
componentDidMount()
{
    axios.get('http://localhost:3001/api/counselling/retrieve')
  
    .then((res) => 
      {
        this.setState({fetchData: res.data.result});

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
          
        
     <div>
     <FormGroup controlId="eno" bsSize="large">
          
          <p>ROLL NO:</p>
          <FormControl
            autoFocus
             id="area"
            // value={this.state.username}
            onChange={(item)=>this.valid(item,"_id")}
          />
        </FormGroup>

        <FormGroup controlId="eno" bsSize="large">
          
          <p>COLLEGE</p>
          <FormControl
            autoFocus
             id="area"
            // value={this.state.username}
            onChange={(item)=>this.valid(item,"clg")}
          />
        </FormGroup>

          <Button
            block
            bsSize="large"
            onClick={()=>this.submit()}
            //disabled={!this.validateForm()}
            type="submit">Submit</Button>
        
            
    </div>


            
 </form>
</div>
<div>
{

          this.state.fetchData.map((dbdata,index)=>{
            return(          
            
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


              
            )         
            
          })
        

          }

                              
                        
      </div>
            
</div>
);
}
}
export default Get;