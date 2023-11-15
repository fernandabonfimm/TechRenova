import React from "react";
import "./styles.css";
import TabPane from "components/tabPane";
import { Card } from "antd";

export default function Dashboard() {
  const items = [
    {
      key: "1",
      label: "Produtos",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Clientes",
      children: "Content of Tab Pane 2",
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Card className="cardContainer">
      <TabPane items={items} onChange={onChange} />
    </Card>
  );
}
