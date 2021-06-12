import React,{useState} from "react";

// function Counter() {

// }

const Counter = () => {
    const [count,setCount]=useState(0);
    
    // const handleIncreament = () =>{
    //     setCount(count + 1);
    // }

    const handleDecreament = () =>{
        setCount(count - 1);
    }
return (
    <React.Fragment>
    <p>The count is: {count}</p>
    <button onClick={() =>setCount(count + 1)}>Increament</button>
    <button onClick={handleDecreament}>Decreament</button>
    </React.Fragment>
    
 );
};

export default Counter;
