import React from 'react';
function Map() {
    const listUser = [
        {
            name:'Loc'
        },
        {
            name:'Teo'
        }
    ]
    return (
    <div>
        {
            listUser.map((user)=>(
                <div>{user.name}</div>
            ))
        }
        {
            listUser.map((user,index)=>(
                <div key={index}>{user.name}</div>
            )) //Each child in a list should have a unique "key" prop.

        }
    </div>        
    );
}

export default Map;