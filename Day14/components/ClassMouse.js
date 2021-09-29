import React, { Component } from 'react'

export class ClassMouse extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,
             y:0
        }
    }

    logmousepostion=e=>{
        this.setState({x:e.clientX,y:e.clientY})
    }

    componentDidMount(){
        console.log("hello ajay")
        window.addEventListener('mousemove',this.logmousepostion)
    }
    
    
    render() {
        return (
            <div>
                X - {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}

export default ClassMouse
