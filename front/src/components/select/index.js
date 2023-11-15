import React from "react";
import "./styles.css";
import { Select } from "antd";

export default function SelectComponent({ label, options, onChange }) {
  return (
    <div className="divInput">
      <label className="labelClass">{label}</label>
      <Select
        labelInValue
        onChange={onChange}
        className="inputClassSelect"
        options={options}
      />
    </div>
  );
}
