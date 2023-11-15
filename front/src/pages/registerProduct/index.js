
import React from "react";
import Base from "../../components/base";
import Input from "components/input";
import RegisterProductBanner from "../../assets/img/registerProductBanner.png";
import "../registerProduct/styles.css";
import Button from "components/button";

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
                        label="Nome do produto:"
                        classStyle="inputLabelClassRegisterProduct"
                    >
                    </Input>
                    <Input
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        label="Categoria do produto:"
                        classStyle="inputLabelClassRegisterProduct"
                    >
                    </Input>
                    <Input
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        label="Descrição do produto:"
                        classStyle="inputLabelClassRegisterProduct"
                    ></Input>
                    <Input
                        value={productTimeOfUse}
                        onChange={(e) => setProductTimeOfUse(e.target.value)}
                        label="Tempo de uso:"
                        classStyle="inputLabelClassRegisterProduct"
                    ></Input>
                    <Input
                        value={productBrand}
                        onChange={(e) => setProductBrand(e.target.value)}
                        label="Marca do produto:"
                        classStyle="inputLabelClassRegisterProduct"
                    ></Input>

                </div>
                <div  className="divProductsRegisterRowWithImage">
                    <Input
                        value={productImage}
                        onChange={(e) => setProductImage(e.target.value)}
                        label="Imagem do produto:"
                        classStyle="inputLabelClassRegisterProduct"
                    ></Input>
                    <Input
                        value={manufacturingDate}
                        onChange={(e) => setManufacturingDate(e.target.value)}
                        label="Data de fabricação:"
                        classStyle="inputLabelClassRegisterProduct"
                    ></Input>
                    <Input
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        label="Preço do produto:"
                        classStyle="inputLabelClassRegisterProduct"
                    ></Input>
                </div>
            </div>
            <Button onClick={handleRegisterProduct} btnClassStyle="buttonRegisterProduct">Cadastrar Produto</Button>
        </Base>
    )}