import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                Hello?!
                  <form className= 'login container'>
                  <div className="form-group">
                        <label htmlFor="FirstName">Name</label>
                        <input type="text" className="form-control shadow-light" id="FirstName" aria-describedby="FirstName" placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="LastName">Last Name</label>
                        <input type="text" className="form-control shadow-light" id="LastName" aria-describedby="LastName" placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Nickname">Prefered Name</label>
                        <input type="text" className="form-control shadow-light" id="Nickname" aria-describedby="Nickname" placeholder="Nickname"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="PhoneNumber">Phone Number</label>
                        <input type="number" className="form-control shadow-light" id="PhoneNumber" aria-describedby="PhoneNumber" placeholder="Cell Phone Number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" className="form-control shadow-light" id="Email" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control shadow-light" id="Password" placeholder="Password"/>
                    </div>
                    
                    <button type="submit" className="btn btn-danger">Submit</button>
                </form>
            </div>
        );
    }
}

export default Register;

{/* <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div> */}