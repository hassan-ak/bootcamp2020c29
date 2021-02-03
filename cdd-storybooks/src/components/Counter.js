import React, { useState } from 'react'
import Button from './Button'

const Counter = (props) => {
    const [value,setValue] = useState(props.initialValue)
    return (
        <div style={{backgroundColor:props.backgroundColor}}>
            Hello Counter {props.initialValue}
            Value {value}
            <br/>
            <Button title={"increment"} size="small" onClick={()=>{setValue(value+1)}}/>
            <Button title={"decrement"} size="large" onClick={()=>{setValue(value-1)}}/>
        
        </div>
    )
}

export default Counter;