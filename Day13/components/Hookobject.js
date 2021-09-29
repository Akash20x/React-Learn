import React,{useState} from 'react'

function Hookobject() {
    
const [name,setname]=useState({firstname:'',lastname:''});
    
    return (
        <div>
            <form>
                <input type="text" value={name.firstname} onChange={e => {setname({...name,firstname:e.target.value})}}></input>
                <input type="text" value={name.lastname} onChange={e => {setname({...name,lastname:e.target.value})}}></input>
            </form>
            {name.firstname}
            {name.lastname}
            {JSON.stringify(name)}
        </div>
    )
}

export default Hookobject
