import React from 'react';
import './Button.css'

const Button = (props) => (
    <button 
        className="buttonDefuclt largeButton"
        onClick={()=>{
            alert("Hello")
        }}>
        {props.title}
    </button>
)

export default Button; 