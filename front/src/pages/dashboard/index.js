import React from "react";
import "./styles.css";
import TabPane from "components/tabPane";
import { Card } from "antd";
import Base from "components/base";
import { ProductEndpoint } from "services/endpoints/product.endpoint";
import DataTable from "components/table";
import { UserEndpoint } from "services/endpoints/user.endpoint";
import { Table } from "antd";

export default function Dashboard() {
  const [data, setData] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductEndpoint.GetRegisterProduct();
        setData(response.products);
        console.log("data", data);
      } catch (error) {
        console.error("Erro ao obter os produtos:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await UserEndpoint.FindAllUsers();
        setUsers(response.data);
        console.log("users", users);
      } catch (error) {
        console.error("Erro ao obter os usuários:", error);
      }
    };

    fetchProducts();
    fetchUsers();
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Categoria",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Preço",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Descrição",
      dataIndex: "description",
      key: "description",
    },
  ];

  const columnsUsers = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Sobrenome",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Categoria",
      dataIndex: "category",
      key: "category",
    },
  ];
  return (
    <Base>
      <div className="divCardDash">
        <Card className="cardContainerDash">
          <TabPane
            items={[
              {
                key: "1",
                label: "Produtos",
                children: (
                  <>
                    <Table
                      columns={columns}
                      dataSource={data}
                      rowKey="_id"
                      style={{ width: "100%" }}
                    />
                  </>
                ),
              },
              {
                key: "2",
                label: "Usuários",
                children: (
                  <>
                    <Table
                      columns={columnsUsers}
                      dataSource={users}
                      rowKey="_id"
                      style={{ width: "100%" }}
                    />
                  </>
                ),
              },
            ]}
          />
        </Card>
      </div>
    </Base>
  );
}
