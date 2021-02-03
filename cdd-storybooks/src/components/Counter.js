import React from 'react'
import Button from './Button'

const Counter = (props) => {
    return (
        <div style={{backgroundColor:props.backgroundColor}}>
            Hello Counter {props.initialValue}
            <br/>
            <Button title={"increment"}/>
            <Button title={"decrement"}/>
        
        </div>
    )
}

export default Counter;