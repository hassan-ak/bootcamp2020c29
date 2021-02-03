import React from 'react';
import './Button.css'

const Button = (props) => {
    const size= props.size;
    return(
        <button 
            className={["buttonDefuclt",size].join(" ")}
            onClick={()=>{
                alert("Hello")
            }}>
            {props.title}
        </button>
    )
}

export default Button; 