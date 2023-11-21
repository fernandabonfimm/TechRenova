import React from "react";
import { Table } from "antd";

const { Column } = Table;

const DataTable = ({ data, columns }) => {
  const flattenedData = Array.isArray(data)
    ? data.map((item) => ({ ...item, key: item._id }))
    : [];
    console.log(flattenedData)
  return (
    <Table dataSource={flattenedData}>
      {columns.map((column) => (
        <Column
          title={column.title}
          dataIndex={column.dataIndex}
          key={column.key}
        />
      ))}
    </Table>
  );
};

export default DataTable;
