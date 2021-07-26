import React,{Component} from 'react';
import './Navi.css';
import {Link} from 'react-router-dom';

                                                              
class Navi extends React.Component {
     
    render() {
      return (
<div> 
    <title>Mountain Gateways</title>
    <link rel="stylesheet" type="text/css" href="../s/style.css"/>

<nav class="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <a href="" id="HMM" class=" navbar1 navbar-brand text-success font-weight-bold"><i id="ftree" class="fa fa-tree"></i><i class="fa fa-tree"></i>MOUNTAIN GATEWAYS</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsenavbar">
                <span class="navbar-toggler-icon"></span>    
                </button> 
    
                <div class="collapse navbar-collapse text-center" id="collapsenavbar">
     
                <ul class="navbar-nav ml-auto text-black ">
                    <li class="nav-item">
                        <Link to="/" class="nav-link text-black"><i class="fa fa-home"></i>Home</Link>
                    </li>&nbsp;
                    <li class="nav-item">
                        <Link to="/Aboutus" class="nav-link text-black"><i class="fa fa-tag"></i>About Us</Link>
                    </li>&nbsp;
                    <li class="nav-item">
                        <Link to="/Login" class="nav-link text-black"><i class="fa fa-ticket"></i>Book/Cancel Ticket</Link>
                    </li> &nbsp;
                    <li class="nav-item">
                        <Link to="/Login" class="nav-link text-black"><i class="fa fa-window-close"></i>Check status</Link>
                    </li> &nbsp;
                    <li class="nav-item">
                        <Link to="/Contactus" class="nav-link text-black"><i class="fa fa-phone"></i>Contact us</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>

      )
    }
}
      export default Navi;