import React from "react";
import Base from "../../components/base";
import "./styles.css";
import { Button, Divider } from "antd";
import CardHome from "components/cardHome";
import BannerHome from "../../assets/img/bannerh.png";
import Banner2 from "../../assets/img/banner2.png";
import ButtonComponent from "components/button";
import { ProductEndpoint } from "services/endpoints/product.endpoint";
import CPU from "../../assets/img/cpu.jpg";

const CardsPerPage = 8;

export default function Home() {
  const [arrCardHome, setCardHome] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductEndpoint.GetRegisterProduct();
        setCardHome(response.products);
      } catch (error) {
        console.error("Erro ao obter os produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(arrCardHome.length / CardsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const visibleCards = arrCardHome.slice(
    (currentPage - 1) * CardsPerPage,
    currentPage * CardsPerPage
  );

  return (
    <Base>
      <img src={BannerHome} alt="bannerhome" className="imgBannerPrincipal" />
      <div className="divImgBanner2">
        <img src={Banner2} alt="banner2" className="imgBanner2" />
      </div>
      <div className="divproducts">
        <h1>PRODUTOS</h1>
        <Divider />
        <div className="cardContainerFlex">
          {visibleCards.map((item) => (
            <div key={item.id} className="cardItem">
              <CardHome
                title={item.name}
                description={item.description}
                img={CPU}
                price={item.price}
              />
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </Base>
  );
}
