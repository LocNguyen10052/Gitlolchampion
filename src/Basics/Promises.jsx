import React, { Component } from 'react';


class Promises extends Component {
    componentDidMount(){
        const currentPromises = new Promise((resolve , reject)=>{
            const condition = true;
            if(condition){
                setTimeout(() => {
                    resolve('Time out 1')
                }, 2000);
            }
            else{
                reject('Error')
            }
        })
        currentPromises.then((data) => {
            console.log(data)
            return data
        }).then((data)=>{
            console.log(data+"2")
        })
    }

    render(){
        return (
            <div>
               
            </div>
        );
    }
}

export default Promises;