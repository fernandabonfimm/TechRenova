import React from "react";
import Base from "../../components/base";
import "./styles.css";
import { Button, Divider } from "antd";
import CardHome from "components/cardHome";
import BannerHome from "../../assets/img/bannerh.png";
import Banner2 from "../../assets/img/banner2.png";

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
        </div>
      <div className="divCardsHome">
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
      <Button>VER TODOS OS PRODUTOS</Button>
    </Base>
  );
}
