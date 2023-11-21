import React from "react";
import { Layout, Button } from "antd";
import Logo from "../../assets/img/logotr.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Header() {
  const { Header } = Layout;
  const navigate = useNavigate();
  const menu = [
    { label: "Home", value: "home", route: "/" },
    {
      label: "Enviar produtos",
      value: "Produtos",
      route: "/registerProduct",
    },
  ];

  const categoryUser = JSON.parse(localStorage.getItem("user"));
  if (categoryUser.data && categoryUser.data.category === 1) {
    menu.push({
      label: "Dashboard",
      value: "Dashboard",
      route: "/dash",
    });
  }
  return (
    <>
      <Header className="divHeader">
        <img src={Logo} alt="Logo" className="logoPreverHeader" />
        {menu.map((item) => {
          return (
            <div key={item.value}>
              <Button
                className="btnMenuHeader"
                onClick={() => navigate(item.route)}
              >
                {item.label}
              </Button>
            </div>
          );
        })}
        <div className="icon-header" onClick={() => navigate("/login")}>
          <FaUser />
        </div>
      </Header>
    </>
  );
}
