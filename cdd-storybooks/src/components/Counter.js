import React from 'react'

const Counter = (props) => {
    return (
        <div style={{backgroundColor:props.backgroundColor}}>
            Hello Counter {props.initialValue}
        </div>
    )
}

export default Counter;