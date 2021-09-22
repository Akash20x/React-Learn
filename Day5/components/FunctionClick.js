import React ,{ Fragment }from 'react'

function FunctionClick() {

    function changeEvent(e){
        e.preventDefault();
        console.log("Hello Event Handling");
    }

    return(
      <>
        <a href="https://www.youtube.com/watch?v=ARuM1kB6TgA&list=PL_HlKez9XCSO1g7c61SyJZE4iehJDFg_w&index=14" onClick={changeEvent}>Click Me</a>
    <h1>Hello Priya</h1>
    </>  
    )
}

export default FunctionClick
