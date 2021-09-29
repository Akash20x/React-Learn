import React,{useState,useEffect}from 'react'

function FunctionCounterOne() {

    const [count,setCount]=useState(0);
    const [name,setName]=useState(0);

    useEffect(()=>{
        console.log("use effect");
        document.title='clicked ${count} times'
    },[name])
    return (
        <div>
            <input type="text" value={name} onChange={e => { setName(e.target.value)}}></input>
            <button onClick={()=>{ setCount(count+1) }}>click {count} times</button>
        </div>
    )
}

export default FunctionCounterOne
