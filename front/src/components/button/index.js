import React from "react";
import "./styles.css";
import { Button } from "antd";

export default function ButtonComponent({ onClick, children, btnClassStyle = "btnClass" }) {
  return (
    <Button className={btnClassStyle} onClick={onClick}>
      {children}
    </Button>
  );
}
