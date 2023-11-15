import React from "react";
import "./styles.css";
import { Input } from "antd";

export default function InputComponentPass({
  label,
  value,
  onChange,
  placeholder,
  labelClassStyle = "labelClass",
  inputClassStyle = "inputClass",
}) {
  return (
    <div className="divInput">
      <label className={labelClassStyle}>{label}</label>
      <Input.Password
        className={inputClassStyle}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
