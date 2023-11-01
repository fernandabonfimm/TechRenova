import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function CardHome({ title, description, price, img, id }) {
  const navigate = useNavigate();

  function calcDivisionPrice() {
    return price / 12;
  }
  function redirectCard() {
    navigate(`/product/${id}`);
  }
  return (
    <div>
      {img}
      <h1>{title}</h1>
      <span>{description}</span>
      <div>
        <h3>R$ {price} á vista</h3>
        <span>ou 12x R$ {calcDivisionPrice} </span>
      </div>
      <Button onClick={redirectCard}>COMPRAR</Button>
    </div>
  );
}
