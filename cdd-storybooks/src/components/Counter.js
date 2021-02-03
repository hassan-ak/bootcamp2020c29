import React from 'react'
import Button from './Button'

const Counter = (props) => {
    return (
        <div style={{backgroundColor:props.backgroundColor}}>
            Hello Counter {props.initialValue}
            <br/>
            <Button title={"increment"} size="small" onClick={()=>{alert("increment")}}/>
            <Button title={"decrement"} size="large" onClick={()=>{alert("decrement")}}/>
        
        </div>
    )
}

export default Counter;