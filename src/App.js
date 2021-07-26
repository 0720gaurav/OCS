import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './s.css';
import Login from './Login';
import Register from './Register';
// import  from './Gp';
// import bootstrap from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Redirect,Link } from 'react-router-dom';


 
class App extends React.Component {
  onClick(){
    ReactDOM.render(<Login />, document.getElementById('root'));

} 
onclick(){
  ReactDOM.render(<Register />, document.getElementById('root'));

} 
  render() {
 
return(  
  <div class="bgim">
  
  

    
    
    
  <div>    
<div id="myCarousel" class="carousel slide" data-ride="carousel">
  {/* <!-- Indicators --> */}
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol>

  {/* <!-- Wrapper for slides --> */}
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img class="hii" src={require("./img/g3.jpeg")} alt="Chania"/>
      <div class="carousel-caption">
        
      </div>
    </div>

    {/* <div class="item">
      <img class="hii" src={require("./img/g10.jpg")} alt="Chania"/>
      <div class="carousel-caption">
       
      </div>
    </div>

    <div class="item">
      <img class="hii" src={require("./img/g22.jpg")} alt="Flower"/>
      <div class="carousel-caption">
      
      </div>
    </div>

    <div class="item">
      <img class="hii"src={require("./img/g19.jpg")} alt="Flower"/>
      <div class="carousel-caption">
   
      </div>
    </div> */}
  </div>

  {/* <!-- Left and right controls --> */}
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div>

        <div class="cl" id="cl1">
        <center>
          {/* <button class="cls" id="bt" onClick={this.onClick}><h2>LOGIN</h2></button> */}
          
          <Link to="/Login">
          <button class="cls" id="bt" >LOGIN</button>
            </Link>
            
          </center>
        </div>
        <div class="cl" id="cl1">
        <center>
        <Link to="/Register">
        <button class="cls" id="bt">REGISTER</button>
            </Link>
          </center>
        </div>
        <div class="cl" id="cl1">
        <center>
        <Link to="/LoginPage">
        <button class="cls" id="bt">ADMIN LOGIN</button>
            </Link>
          </center>
        </div>
</div>
</div>
</div>

)
}
}
export default App;
