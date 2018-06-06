import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            // Respondants laid out
            <div className = 'candidates col-3'>
                <h4> {this.props.name} </h4>
                <p className = {this.props.nickname ? null : 'hidden' } >Nickname: {this.props.nickname}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.number}</p>
                <button type="button" className="btn btn-danger">Contact Them</button>
            </div>
        );
    }
}

export default User;