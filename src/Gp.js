import './s.css';
import './Contactus.css';
import {Link} from  'react-router-dom';
import React, { Component } from 'react';
import Logout from './Logout';
// import { BrowserRouter, Route, Switch, Redirect,Link } from 'react-router-dom';

                                                                   
class Gp extends React.Component {

    



    render() {
      return (

    <div class="bgimggg">
       <link rel="stylesheet" type="text/css" href="../s/style.css"/>
         

   <div class="hi">
   
        <nav class="navbar navbar-expand-lg bg-light navbar-light" id="nav">
        <div class="container" >
        <a href="" class="navbar-brand text-success font-weight-bold" id="collapsenavbar">GAURAV UPADHYAY</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsenavbar">
                <span class="navbar-toggler-icon"></span>    
            </button> 
            <div class="collapse navbar-collapse text-center "id="collapsenavbar">
            <ul class="navbar-nav ml-auto text-black ">
             <li class="dropdown nav-item">  <a href=""><Link to ="/Gp"> HOME</Link></a></li>           
            
                {/* <li class="dropdown nav-item"> &nbsp; &nbsp;
                 <Link to ="/Aboutus"> ABOUT US</Link>
                  
                  
                </li> */}
                {/* <li class="dropdown nav-item">&nbsp; &nbsp;
                <Link to ="/Subject">COUNSELLING</Link>
                 
                </li> */}
                <li class="dropdown nav-item">&nbsp;&nbsp;
                <Link to ="/Contactus">CONTACT US</Link>
                    
                
                </li>
                
            </ul>
            </div>
            </div>
            <Logout/>

        </nav>
    <div>
       
</div>
		</div>
        <div class="hm">
        
        <center>
            {/* <button class="btn btn-danger text-black btn-lg" onClick={this.try}>COUNSELLING</button> */}
        
            <Link to="/Pay">
                    <button id="b1">
                        COUNSELLING
                     </button>
            </Link><br/><br/>
            <Link to="/SUBMIT">
                    <button id="b1">
                        CHECK STATUS
                     </button>
            </Link>
            </center>
        
        </div>
        <div class="hq"> 
		<section class="middlePanel">
		<marquee class="hw" direction="up" scrolldelay="12" behaviour="scroll" onmousedown="this.stop();"
           onmouseup="this.start();" onmouseover="this.stop();"
           onmouseout="this.start();">
		  
		   <span class="scrollTxt">
		<p>असफलता एक चुनौती है,स्वीकार करो
		क्या कमी रह गई,</p><p> देखो और सुधार करो,
        जब तक न सफल हो,</p><p> नींद चैन को त्यागो 
		तुम संघर्ष का मैदान छोड़ मत भागो तुम,</p>
        <p> कुछ किये बिना ही जय जय कार नहीं होती </p><p>
        कोशिश करने वालों की हार नहीं होती!!!</p>
		</span>
        </marquee>
		</section>
		</div> 
        
        
    
    </div>

      )
    }
  }
  export default Gp;