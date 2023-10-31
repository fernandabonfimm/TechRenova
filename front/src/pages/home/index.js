import React from "react";
import Base from "../../components/base";
import "./styles.css";
import { Button, Divider } from "antd";
import CardHome from "components/cardHome";
import Celular from "../../assets/img/celular.jpg";
import Cpu from "../../assets/img/cpu.jpg";
import Notebook from "../../assets/img/notebook.jpg";
import BannerHome from "../../assets/img/bannerh.png";

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
      <img src={BannerHome} alt="bannerhome" />
      <h1>PRODUTOS</h1>
      <Divider />
      <div className="divCardsHome">
        {arrCardHome.map((item) => {
          <div key={item.id}>
            <CardHome
              title={item.title}
              description={item.description}
              img={item.img}
              price={item.price}
            />
            ;
          </div>;
        })}
      </div>
      <Button>VER TODOS OS PRODUTOS</Button>
    </Base>
  );
}
