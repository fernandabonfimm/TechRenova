import React from "react";
import Base from "../../components/base";
import "./styles.css";
import { Button, Divider } from "antd";
import CardHome from "components/cardHome";
import BannerHome from "../../assets/img/bannerh.png";
import Banner2 from "../../assets/img/banner2.png";
import ButtonComponent from "components/button";
import { ProductEndpoint } from "services/endpoints/product.endpoint";

export default function Home() {
  const [arrCardHome, setCardHome] = React.useState([]);
  React.useEffect(() => {
    const products = ProductEndpoint.GetRegisterProduct();
    console.log("productos", products)
    setCardHome(products);
  }, []);
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
          </div>
        })}
      </div>
      <div className="divproducts smalbtn">
        <ButtonComponent>VER TODOS OS PRODUTOS</ButtonComponent>
        </div>
    </Base>
  );
}
