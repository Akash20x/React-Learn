import React, { Component } from 'react'
import B from './B';
import C from './C';
export const mycontext=React.createContext();

export class A extends Component {


    state={
        name:"Ajay Suneja",
        roll:20
    }


    render() {
        return (
            <div>
                <h1>Component A</h1>
                <mycontext.Provider value ={this.state}>
                 <B/>
                 <C/>
                </mycontext.Provider>
            </div>
        )
    }
}

export default A
