import React from 'react'
import subjects from './HOC'

class Ajay extends React.Component {
    state={
        marks:0
    }

    marksIncreamented=()=>{
        this.setState({marks:this.state.marks+1})
    }
    render() {
        return (
            <div>
            <h2 onMouseOver={this.marksIncreamented}>Ajay Marks {this.state.marks},{this.props.hocsub}</h2>
            </div>
        )
    }
}
        
export default subjects(Ajay)
