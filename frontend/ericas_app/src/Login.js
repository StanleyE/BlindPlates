import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Register from './Register';

class Login extends Component {
    render() {
        return (
            <div className = 'motherdiv'>
                <form className= 'login container'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Login</label>
                        <input type="email" className="form-control shadow-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control shadow-light" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-danger">Submit</button>
                </form>
            <nav>
                <Link className = 'nav' to='/register'> New User </Link>          
                <Link className = 'nav' to='/login'> Login </Link>
            </nav>
            </div>
        );
    }
}

export default Login;