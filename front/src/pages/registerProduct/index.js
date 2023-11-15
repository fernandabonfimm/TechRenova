
import React from "react";
import Base from "../../components/base";
import BannerHome from "../../assets/img/bannerh.png";
import { useNavigate } from "react-router-dom";
import Input from "components/input";
import Button from "components/button";
import RegisterProductBanner from "../../assets/img/registerProductBanner.png";

export default function RegisterProduct() {
    const [productName, setProductName] = React.useState("");
    const [productDescription, setProductDescription] = React.useState(""); 
    const [productCategory, setProductCategory] = React.useState("");
    const [productTimeOfUse, setProductTimeOfUse] = React.useState("");
    const [productBrand, setProductBrand] = React.useState("");
    const [manufacturingDate, setManufacturingDate] = React.useState("");
    const [productPrice, setProductPrice] = React.useState("");
    const [productImage, setProductImage] = React.useState("");

    function handleRegisterProduct() {
        const body = {
            productName: productName,
            productDescription: productDescription,
            productCategory: productCategory,
            productTimeOfUse: productTimeOfUse,
            productBrand: productBrand,
            manufacturingDate: manufacturingDate,
            productPrice: productPrice,
            productImage: productImage,
        };
    }


    return (
        <Base>
            <img src={RegisterProductBanner} alt="registerProduct" className="imgBannerPrincipal" />
            <div className="divProductsRegisterCollumn">
                <div className="divProductsRegisterRow">
                    <Input
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        label="Nome do produto"
                    >
                    </Input>
                    <Input
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        label="Descrição do produto"
                    ></Input>
                </div>
                <div>
                    <Input
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        label="Categoria do produto"
                        ></Input>
                    <Input
                        value={productTimeOfUse}
                        onChange={(e) => setProductTimeOfUse(e.target.value)}
                        label="Tempo de uso"
                        ></Input>
                </div>
            </div>
        </Base>
    )}