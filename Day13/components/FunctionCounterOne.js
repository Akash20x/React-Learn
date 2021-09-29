import React,{useState,useEffect}from 'react'

function FunctionCounterOne() {

    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);

    useEffect(()=>{
        console.log("use effect");
        document.title='clicked ${count} times'
    },[count])
    return (
        <div>
            <button onClick={()=>{ setCount(count+1) }}>click {count} times</button>
        </div>
    )
}

export default FunctionCounterOne
