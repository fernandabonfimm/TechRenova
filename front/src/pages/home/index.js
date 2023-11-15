import React from "react";
import Base from "../../components/base";
import "./styles.css";
import { Button, Divider } from "antd";
import CardHome from "components/cardHome";
import BannerHome from "../../assets/img/bannerh.png";
import Banner2 from "../../assets/img/banner2.png";
import ButtonComponent from "components/button";

export default function Home() {
  const arrCardHome = [
    {
      title: "celular usado",
      description: "Celular usado",
      price: 300,
      id: 1,
    },
    {
      title: "celular usado",
      description: "Celular usado",
      price: 300,
      id: 2,
    },
    {
      title: "celular usado",
      description: "Celular usado",
      price: 300,
      id: 3,
    },
  ];
  return (
    <Base>
      <img src={BannerHome} alt="bannerhome" className="imgBannerPrincipal" />
      <div className="divImgBanner2">
        <img src={Banner2} alt="banner2" className="imgBanner2" />
      </div>
      <div className="divproducts">
      <h1>PRODUTOS</h1>
        <Divider />
        {arrCardHome.map((item) => {
          <div key={item.id}> 
            <CardHome
              title={item.title}
              description={item.description}
              img={item.img}
              price={item.price}
            />
          </div>;
        })}
      </div>
      <div className="divproducts smalbtn">
        <ButtonComponent>VER TODOS OS PRODUTOS</ButtonComponent>
        </div>
    </Base>
  );
}
