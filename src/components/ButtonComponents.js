import React, { Component } from 'react';
import "./UserData.css"
class ButtonComponents extends Component {
    state = { userData: [] }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data =>
                this.setState({
                    userData: data
                })
            );
    }

    render() {
        return (
            <div>
                {this.state.userData.map(user => (
                    <div className="myDiv">
                    <li key={user.id}> 
                    <p>User Address:{user.address.city}</p>
                    <p>Company:{user.company.bs}</p>
                    <p>Uaer Email:{user.email}</p>
                    <p>Name:{user.name}</p>
                    <p>Phone:{user.phone}</p>
                    <p>UserName:{user.username}</p>
                    <p>Website:{user.website}</p>

                  </li>
                  </div>
                ))}
            </div>
        )
    }
}


export default ButtonComponents;