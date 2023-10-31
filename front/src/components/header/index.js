import React from "react";
import { Layout, Button } from "antd";
import Logo from "../../assets/img/logotr.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";

export default function Header() {
  const { Header } = Layout;
  const navigate = useNavigate();
  const menu = [
    { label: "Home", value: "home", route: "/" },
    {
      label: "Produtos refatorados",
      value: "Produtos",
      route: "/refactProduct",
    },
    { label: "Enviar produtos", value: "Enviar", route: "/sendProduct" },
  ];
  return (
    <>
      <div className="headerMobile">
        <Header className="divHeader">
          {menu.map((item) => {
            <div key={item.value}>
              <Button
                className="btnMenuHeader"
                onClick={() => navigate(item.route)}
              >
                {item.label}
              </Button>
            </div>;
          })}
          <img src={Logo} alt="Logo" className="logoPreverHeader" />
        </Header>
        <div>
          <FaUser />
          <BsFillCartFill />
        </div>
      </div>
    </>
  );
}
