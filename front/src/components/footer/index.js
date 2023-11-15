import React from "react";
import { Layout, Row, Col, Button } from "antd";
import "./styles.css";
import Logo from "../../assets/img/logotr.png";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const { Footer } = Layout;
  const navigate = useNavigate();
  function verifyPage() {
    if (!navigate("/about")) {
      alert("Pagina não existe!");
    }
  }
  return (
    <>
      <Footer className="divCopyright">
        <span className="spanCopyright">
          © COPYRIGHT 2013 - 2023 TECH RENOVA | POLÍTICA DE PRIVACIDADE
        </span>
      </Footer>
    </>
  );
}
