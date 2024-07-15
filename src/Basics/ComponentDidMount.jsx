import React, { Component } from 'react';
import PropTypes from 'prop-types';



class ComponentDidMount extends Component {
    constructor(){
        super();
        this.state={
            user:[]
        }

    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then((response)=>
            response.json()
        ).then((userAPI)=>{
            this.setState(()=>{
                return {
                    user : userAPI
                }
            },()=>{
                console.log(this.state)
            }
        )
        })
    }
    render(){
        return (
            <div>
                {this.state.user.map((user)=>(
                    <div key={user.id}>{user.name}</div>
                ))}
            </div>
        );
    }
}

export default ComponentDidMount;