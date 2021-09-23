import React from 'react'

function Inline() {
    const heading={
    color:'red',
    fontsize:'26px'
    }
    return (
        <div>
        <h1 className='error'>Error</h1>
            <h1 style={heading}>Hello Inline Style Sheet</h1>
        </div>
    )
}

export default Inline
