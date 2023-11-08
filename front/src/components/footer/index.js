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
      <Footer className="footer">
        <Row gutter={[32, 22]}>
          <Col xs={24} xl={6}>
            <img src={Logo} alt="Logo" className="logoFooter" />
          </Col>
          <Col xs={24} xl={18}>
            <div className="divCol2Footer">
              <h1 className="titleCol2Footer">SOBRE NOSSO MODELO DE NEGÓCIOS</h1>
              <span className="subtitleCol2Footer">
                The perfect balance of whimsical and wearable – the feminine
                Edie Cascade
              </span>
              <Button className="btnCol2Footer" onClick={verifyPage}>SAIBA MAIS</Button>
            </div>
          </Col>
        </Row>
      </Footer>
      <Footer className="divCopyright">
        <span className="spanCopyright">
          © COPYRIGHT 2013 - 2023 TECH RENOVA | POLÍTICA DE PRIVACIDADE
        </span>
      </Footer>
    </>
  );
}
