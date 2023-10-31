import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function BannerFooter() {
  const navigate = useNavigate();
  return (
    <div className="divPrimaryBannerF">
      <div>
        <h1>
          POSSUI APARELHOS ELETRÔNICOS EM CASA E NÃO UTILIZA MAIS E NÃO SABE
          COMO DESCARTAR?
        </h1>
        <span>
          Envia-nos o seu aparelho com fotos, descrição e valor que está
          pedindo. Dentro de 2 dias úteis iremos responder a negociação.
        </span>
        <Button className="btnBannerFooter" onClick={() => navigate("/")}>
          ENVIAR APARELHO
        </Button>
      </div>
    </div>
  );
}
