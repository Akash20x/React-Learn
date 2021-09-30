import React, { Component } from 'react'
import {mycontext} from './A'


export class C extends Component {
    render() {
        return (
            <div>
                <h1>C Component</h1>
                <mycontext.Consumer>{data => <h3>{data.roll}</h3>}</mycontext.Consumer>
            </div>
        )
    }
}

export default C
