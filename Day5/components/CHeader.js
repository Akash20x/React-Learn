import React from "react";
import Testing from "./Testing";

class CHeader extends React.Component{
    
    state={
        users:[
            {id:1,name:"brian",class:"A"},
            {id:2,name:"fernando",class:"B"}
        ]
    }

    render(){
        const users=this.state.users.map(user=>{
            return(
                // <h1 key={user.id}>{user.id}
                // {user.name}
                // {user.class}
                // </h1>
                <Testing key ={user.id} value={user.id}></Testing>
                
            )
        });
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <h2>{users}</h2>
            </div>
        )
    }
}

export default CHeader;