import React from 'react';
import './Button.css'

const Button = (props) => {
    const size= props.size;
    return(
        <button 
            className={["buttonDefuclt",size].join(" ")}
            onClick={()=>{
                props.onClick()
            }}>
            {props.title}
        </button>
    )
}

export default Button; 