import React from "react";
import { Tabs } from "antd";

const { TabPane: AntTabPane } = Tabs;

const customStyles = {
  tabPane: {
    padding: "20px",
    background: "#f0f0f0",
    border: "1px solid #d9d9d9",
    borderRadius: "4px",
    marginBottom: "16px",
    width: "100%",
  },
  tabContent: {
    width: "100%",
    maxWidth: "100%",
  },
};

const TabPane = ({ items, onChange }) => {
  return (
    <Tabs defaultActiveKey="1" onChange={onChange} tabBarStyle={{ width: "100%" }}>
      {items.map((item) => (
        <AntTabPane
          tab={item.label}
          key={item.key}
          style={customStyles.tabPane}
        >
          <div style={customStyles.tabContent}>{item.children}</div>
        </AntTabPane>
      ))}
    </Tabs>
  );
};

export default TabPane;
