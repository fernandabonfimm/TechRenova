import React from "react";
import "./styles.css";
import { Button } from "antd";

export default function ButtonComponent({ onClick, children }) {
  return (
    <Button className="btnClass" onClick={onClick}>
      {children}
    </Button>
  );
}
