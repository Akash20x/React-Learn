import React, { Component } from 'react'
import { Consumer } from './context'

export class B extends Component {
    render() {
        return (
            <div>
                <div>Component B</div>
                <Consumer>
                    {
                        ({data,handlecheck}) =>(
                            <div>
                            <h3>
                              {data.roll} ,{data.name}
                            </h3>
                        <button onClick={handlecheck}>Change Roll No</button>
                            </div>
                        )
                    }
                </Consumer>
            </div>
        )
    }
}

export default B
