import React,{Component} from 'react';
import './App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import App from './App';
import Login from './Login';
import LoginPage from './LoginPage';
import Register from './Register';
import Error from './Error';
import Counselling from './Counselling';
import Gp from './Gp';
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import Pay from './Pay';
import Submit from './Submit';
import Get from './Get';


class Data extends Component{
render() {
  return (
  <BrowserRouter>
  <div>
  
   
      
     
  <Switch>
  <Route path ="/" component={App} exact />
  <Route path ="/Login" component={Login}  />
  <Route path ="/LoginPage" component={LoginPage}  />
  <Route path ="/Register" component={Register}  />
  <Route path ="/Gp" component={Gp} exact />
  <Route path ="/Contactus" component={Contactus}  />
  <Route path ="/Aboutus" component={Aboutus}  />
  <Route path="/Counselling" component={Counselling} />
  <Route path="/Pay" component={Pay} />
  <Route path="/Submit" component={Submit} />
  <Route path="/Get" component={Get} />
  
  <Route component={Error} exact/>
  </Switch>
  </div>
  </BrowserRouter>
  
     );
   }
 }
export default Data;
