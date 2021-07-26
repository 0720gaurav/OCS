import React,{Component} from 'react';
import './Contactus.css';
import axios from 'axios';

class Contactus extends Component{
  constructor(props){
    super(props)
    this.state={
      _id:"",
      lastname:"",
      cno:"",
      subject:""
      
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
      case "lastname":{
        this.setState({lastname:itemValue})
      }
      case "cno":{
        this.setState({cno:itemValue})
      }
      case "subject":{
        this.setState({subject:itemValue})
      }
    }
      
  }

submit()
{
let obj={}
obj._id=this.state._id;
obj.lastname=this.state.lastname;
obj.cno=this.state.cno;
obj.subject=this.state.subject;



alert("wait"); 
console.log(obj);

const{ _id,lastname,cno,subject}=this.state;

axios.post('http://localhost:3001/api/contactus/create',{_id,lastname,cno,subject})
.then(result => 
  {
    alert("Created")
    console.log(result.data);
  }
  );
}
    render() {
        return(
<div class="container">
  <div class="con">
<center><h1><u><b>CONTACT US</b></u></h1></center><br/>
    <label for="fname">FIRST NAME</label><br/>
    <input type="text" id="fname" name="_id" placeholder="Your name.." onChange={(item)=>this.valid(item,"_id")}/><br/>

    <label for="lname">LAST NAME</label><br/>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={(item)=>this.valid(item,"lastname")}/><br/>

    <label for="cno">CONTACT NO</label><br/>
    <input type="text" id="cno" name="cno" placeholder="Your contact no.." onChange={(item)=>this.valid(item,"cno")}/><br/>

    <label for="subject">MESSAGE</label><br/>
    <textarea id="subject" name="subject" placeholder="Write something.." onChange={(item)=>this.valid(item,"subject")} ></textarea><br/>

    <input type="submit" id="submit" value="Submit" onClick={()=>this.submit()}/>

  </div>
</div>
    );
}
}
export default Contactus;