import React,{useState,useEffect} from 'react'

function HookMouse() {

    const [x,setX]=useState(0);
    const [y,setY]=useState(0);

    const logmousemove=e=>{
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener('mousemove',logmousemove)
    })

    return (
        <div>
            X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
