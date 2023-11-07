import React from "react";  
import './styles.css';
export default function Input({label, value, onChange}){
    return (
        <div className="divInput">
            <label className="labelClass">{label}</label> 
            <input className="inputClass" value={value}
            onChange={onChange}
            ></input>
        </div>
    )
}