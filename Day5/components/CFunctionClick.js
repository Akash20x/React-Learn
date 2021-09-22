import React, { Component } from 'react'

class CFunctionClick extends Component {

    render() {
        const numbers=this.props.numbers;
        return (
            <React.Fragment>
            <ul>{
            numbers.map((numbers)=><li key={numbers}>{numbers}</li>)
            }
            </ul>
            {numbers[0]}
            </React.Fragment>
        )
    }
}

export default CFunctionClick
