import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import About from './About'
const axios = require('axios');


class App extends Component {
  constructor(){
    super();
    this.state = {
      results: [
        // first_name: '',
        // nickname: '',
        // gender: '',
        // dob: '',
        // phone_number:'',
      ],
      reqSent: [{
        sent: false,
      }],
      resLocation: [
        {
          // lng: '',
          // lat: '',
        }
      ],
    }
    this.findPeople = this.findPeople.bind(this);
    this.reqSent = this.reqSent.bind(this);
  }
//the request form has been submitted
reqSent=()=>{
  let mimic = Array.from(this.state.reqSent);
  mimic[0].sent = true;
  this.setState({
    reqSent:mimic
  })
  //console.log(this.state.reqSent);
}

//information has been brought to App from the form and sent via axios Post to be sent out (via Twilio message) and organized based on other users position to the restaurant
  findPeople(lng, lat, form){
    let newLoc = {
      lng: lng,
      lat:lat,
      name: form.name,
      number: form.number,
      rest: form.rest,
      time: form.time,
      msg: form.msg,
      conv: form.conv,
      opt: form.opt
    }
    // console.log(newLoc,'newlocation');
    // console.log(form);
    axios.post('/main/schwoopt', newLoc)
          .then(results =>{
              this.setState({
              results:results.data
          })
        })
         .catch(error =>{
           console.log(error)
         })
    let mimic = Array.from(this.state.resLocation);
    mimic.push(newLoc);
    this.setState({
      resLocation:mimic
    })
    this.reqSent();
  }
  

  render() {
    

    return (
      <div className="App">
        <div className = 'header container'>
          <h1>BlindPl@te</h1>
        </div>
        <nav>
          <Link className = 'nav nav-about' to='/'> About </Link>          
          <Link className = 'nav nav-login' to='/login'> Login </Link>
          <Link className = 'nav nav-main' to='/main'> Main User Page </Link>
        </nav>
        <div className="greet">
          <h3>Hey there!</h3>
          <h4>Feeling like socializing tonight?</h4>
        </div>
        <Switch>
          <Route exact path='/' render = {()=>{return <About />}} />                    
          <Route  path='/login' render = {()=>{return <Login />}} />          
          <Route path='/main' render = {()=>{return <Main results = {this.state.results} findPeople = {this.findPeople} reqSent = {this.state.reqSent} newRec = {this.newRec} />}} />
        </Switch>
      </div>
    );
  }
}

export default App;
