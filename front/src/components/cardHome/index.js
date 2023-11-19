import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "components/button";
import { Card } from "antd";
import "./styles.css";

export default function CardHome({ title, description, price, img, id }) {
  const navigate = useNavigate();

  function calcDivisionPrice() {
    return price / 12;
  }
  function redirectCard() {
    navigate(`/product/${id}`);
  }

  function Ellipsis(str, limit) {
    if (str && str.length > limit) {
      return str.substring(0, limit) + "...";
    } else {
      return str;
    }
  }

  function formatMoney(price) {
    return price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
  return (
    <Card className="divp-cardhome">
      <div>
        <img src={img} alt={title} className="img-cardhome" />
        <h1>{Ellipsis(title, 30)}</h1>
        <span>{Ellipsis(description, 50)}</span>
        <div>
          <h3>R$ {formatMoney(price)} á vista</h3>
          <span>ou 12x R$ {calcDivisionPrice} </span>
        </div>
      </div>
      <div style={{marginTop: 10}}>
      <ButtonComponent onClick={redirectCard}>COMPRAR</ButtonComponent>
      </div>
    </Card>
  );
}
