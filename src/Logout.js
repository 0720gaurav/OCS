import React,{Component} from 'react';
import './Logout.css';
import {Link} from  'react-router-dom';
import axios from 'axios';


class Logout extends React.Component{
render(){
    return(
<div>

<div class="container">

  {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/> */}
 
<div>
    <Link to="/">
    <button type="submit" id="lo" class="btn btn-success">LOGOUT</button>
    </Link>
</div>
</div>
</div>
)
}
}
export default Logout;