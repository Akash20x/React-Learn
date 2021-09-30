import React from 'react'

class Sushant extends React.Component {
    state={
        marks:0
    }

    marksIncreamented=()=>{
        this.setState({marks:this.state.marks+1})
    }
    render() {
        return (
            <div>
            <h2 onMouseOver={this.marksIncreamented}>Sushant Marks {this.state.marks}</h2>
                
            </div>
        )
    }
}
        
export default Sushant
