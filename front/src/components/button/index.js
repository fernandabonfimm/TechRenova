import React from "react";
import "./styles.css";

export default function Button({ onClick, children }) {
  return (
    <button className="btnClass" onClick={onClick}>
      {children}
    </button>
  );
}
