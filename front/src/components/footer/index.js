import React from "react";
import { Layout, Divider, Button } from "antd";
import "./styles.css";
import Logo from "../../assets/img/logotr.png";

export default function Footer() {
  const { Footer } = Layout;
  return (
    <>
      <Footer className="footer">
        <div className="divLogosFooter">
          <img src={Logo} alt="Logo" className="logoFooter" />
        </div>
      </Footer>
      <Footer className="divCopyright">
        <Divider />
        <span className="spanCopyright">
          © COPYRIGHT 2013 - 2023 TECH RENOVA | POLÍTICA DE PRIVACIDADE
        </span>
      </Footer>
    </>
  );
}
