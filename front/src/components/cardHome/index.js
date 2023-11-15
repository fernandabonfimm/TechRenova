import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "components/button";
import { Card } from "antd";
import './styles.css'

export default function CardHome({ title, description, price, img, id }) {
  const navigate = useNavigate();

  function calcDivisionPrice() {
    return price / 12;
  }
  function redirectCard() {
    navigate(`/product/${id}`);
  }
  const user =localStorage.getItem('user')
  return (
    <Card className="divp-cardhome">
      <img src={img} alt={title} className="img-cardhome"/>
      <h1>{title}</h1>
      <span>{description}</span>
      <div>
        <h3>R$ {price} á vista</h3>
        <span>ou 12x R$ {calcDivisionPrice} </span>
      </div>
      <ButtonComponent onClick={redirectCard}>COMPRAR</ButtonComponent>
    </Card>
  );
}
