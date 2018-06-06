import React, { Component } from 'react';
import User from './User';

class List extends Component {
    render() {
        // Respondants are filtered
        let ListJSX = [];
        let users = this.props.results;
        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            ListJSX.push( < User name = {user.first_name} nickname = {user.nickname} gender = {user.gender} number= {user.phone_number} key = {i} /> )
            
        }
        return (
            <div className="row hold">
                {ListJSX}
            </div>
        );
    }
}

export default List;