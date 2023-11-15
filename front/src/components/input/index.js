import React from "react";
import "./styles.css";
import { Input } from "antd";

export default function InputComponent({
  label,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="divInput">
      <label className="labelClass">{label}</label>
      <Input
        className="inputClass"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></Input>
    </div>
  );
}
