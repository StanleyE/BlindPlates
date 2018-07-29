import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <p>New user? Welcome! Let's get started?</p>
                  <form className= 'reg container'>
                  <div className='flex-dis'>
                    <div className="form-group col-md-4">
                            <label htmlFor="FirstName"> First Name</label>
                            <input type="text" className="form-control shadow-light" id="FirstName" aria-describedby="FirstName" placeholder="First Name"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="LastName">Last Name</label>
                            <input type="text" className="form-control shadow-light" id="LastName" aria-describedby="LastName" placeholder="Last Name"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="Nickname">Prefered Name</label>
                            <input type="text" className="form-control shadow-light" id="Nickname" aria-describedby="Nickname" placeholder="Nickname"/>
                        </div>
                    </div>
                    <div className='flex-dis'>
                        <div className="form-group col-md-6">
                            <label htmlFor="PhoneNumber">Phone Number</label>
                            <input type="number" className="form-control shadow-light" id="PhoneNumber" aria-describedby="PhoneNumber" placeholder="Cell Phone Number"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Email">Email</label>
                            <input type="email" className="form-control shadow-light" id="Email" aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group col-lg-12">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control shadow-light" id="Password" placeholder="Password"/>
                    </div>
                    <div className ='flex-dis'>
                        <div className="form-group col-md-6">
                            <label htmlFor="Address">Address</label>
                            <input type="text" class="form-control shadow-light" id="Address" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="City">City</label>
                            <input type="text" class="form-control shadow-light" id="City"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger">Submit</button>
                </form>
            </div>
        );
    }
}

export default Register;