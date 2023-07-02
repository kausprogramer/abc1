import React from "react";

import styles from './inputControl.css'

function InputControl(props) {
    return(
        <div>
            {props.label && <label>{props.label}</label>}
            <input {...props}/>
        </div>
    );
}

export default InputControl;