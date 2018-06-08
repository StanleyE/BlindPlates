import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            // Respondants laid out
            <div className = 'candidates col-3'>
                <div className = 'user-content'>
                    <h4> {this.props.name} </h4>
                    <p className = {this.props.nickname ? null : 'hidden' }>Nickname: {this.props.nickname}</p>
                    <p>{this.props.gender}</p>
                </div>
                <div className = 'connect'>
                    <p>{this.props.number ? <p><i className="fas fa-mobile-alt fa-2x phone"></i> We've sent them a message!</p> : <button type="button" className="btn btn-danger">Choose Them <i className="far fa-envelope"></i> </button>}</p>
                </div>
            </div>
        );
    }
}

export default User;