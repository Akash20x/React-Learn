import React, { Component } from 'react'

class CFunctionClick extends Component {

    constructor(props){
        super(props);
    
        this.state={
            roll:this.props.roll
        }
        
    }
   
    changeEvent=()=>{
                  
        console.log("Hello Ajay",this.state.roll);
    }

    render() {
        return (
            <div>
            <button onClick={this.changeEvent}>Click Me</button>
            <br/>
            {this.props.roll}
            </div>
        )
    }
}

export default CFunctionClick
