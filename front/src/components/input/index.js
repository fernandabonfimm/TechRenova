import React from "react";  
import './styles.css';
import { Input } from "antd";

export default function InputComponent({label, value, onChange}){
    return (
        <div className="divInput">
            <label className="labelClass">{label}</label> 
            <Input className="inputClass" value={value}
            onChange={onChange}
            ></Input>
        </div>
    )
}