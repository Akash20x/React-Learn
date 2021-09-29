import React,{useState,useEffect} from 'react'

export default function HookCounter() {
    
    const [channelname,setname]=useState("Technical Suneja");
    const [count,setcount]=useState("Subscribers");
    const [counter,setcounter]=useState(0);
    const [counter1,setcounter1]=useState(0);



    const stateHandler=() =>{
        setname("Ajay Suneja")
        setcount("44000")    
    }

    const Increament=()=>{
      setcounter(counter + 1);
    }

    const Decreament=()=>{
     setcounter1(counter1 - 1);

    }

    const Increamented=()=>{
        for(let i=0;i<10;i++){
            setcounter(preCount => preCount + 1)
        }
    }

    useEffect( ()=>{
       console.log("Ajay Suneja")
    },[counter1,counter]);

    return (
        <div>
            {channelname}
            {count}
            <button onClick={stateHandler}>Click Here</button>
            <button onClick={Increament}>Increment {counter}</button>
            <button onClick={Decreament}>Decrement {counter1}</button>
            <button onClick={Increamented}>Increamented by 10 - {counter}</button>
        </div>
    )
}
