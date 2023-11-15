import React from "react";
import Base from "../../components/base";
import "./styles.css";
import { Button, Divider, Row, Col } from "antd";
import CardHome from "components/cardHome";
import Celular from "../../assets/img/celular.jpg";
import Cpu from "../../assets/img/cpu.jpg";
import Notebook from "../../assets/img/notebook.jpg";
import BannerHome from "../../assets/img/bannerh.png";
import Banner2 from "../../assets/img/banner2.png";

export default function Home() {
  const arrCardHome = [
    {
      title: "celular usado",
      description: "Celular usado",
      price: 300,
      img: <img src={Celular} alt="celular" />,
      id: 1,
    },
    {
      title: "celular usado",
      description: "Celular usado",
      price: 300,
      img: <img src={Cpu} alt="celular" />,
      id: 1,
    },
    {
      title: "celular usado",
      description: "Celular usado",
      price: 300,
      img: <img src={Notebook} alt="celular" />,
      id: 1,
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
