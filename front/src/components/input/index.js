import React from "react";
import "./styles.css";
import { Input } from "antd";

export default function InputComponent({
  label,
  value,
  onChange,
  placeholder,
  classStyle = "labelClass",
}) {
  return (
    <div className="divInput">
      <label className={classStyle}>{label}</label>
      <Input
        className="inputClass"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></Input>
    </div>
  );
}
