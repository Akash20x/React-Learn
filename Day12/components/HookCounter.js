import React,{useState} from 'react'

export default function HookCounter() {
    
    const [channelname,setname]=useState("Technical Suneja");
    const [count,setcount]=useState("Subscribers");


    const stateHandler=() =>{
        setname("Ajay Suneja")
        setcount("44000")    
    }

    return (
        <div>
            {channelname}
            {count}
            <button onClick={stateHandler}>Click Here</button>
        </div>
    )
}
