
import React from "react";
import Base from "../../components/base";
import Input from "components/input";
import RegisterProductBanner from "../../assets/img/registerProductBanner.png";
import "../registerProduct/styles.css";
import Button from "components/button";
import axios from "axios";

export default function RegisterProduct() {
    const [productName, setProductName] = React.useState("");
    const [productDescription, setProductDescription] = React.useState(""); 
    const [productCategory, setProductCategory] = React.useState("");
    const [productTimeOfUse, setProductTimeOfUse] = React.useState("");
    const [productBrand, setProductBrand] = React.useState("");
    const [manufacturingDate, setManufacturingDate] = React.useState("");
    const [productPrice, setProductPrice] = React.useState("");
    const [productImage, setProductImage] = React.useState("");

    async function handleRegisterProduct() {
        const body = {
            name: productName,
            description: productDescription,
            category: productCategory,
            productUsageDuration: productTimeOfUse,
            productBrand: productBrand,
            manufacturingDate: manufacturingDate,
            price: productPrice,
            image: productImage,
        };
        try {
            const response = await axios.post("http://localhost:3010/product", body);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        // await axios.get("http://localhost:3010/").then((response) => {
        //     console.log(response);
        // }).catch((error) => {  
        //     console.log(error);
        // });
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
                        labelClassStyle="inputLabelClassRegisterProduct"
                        inputClassStyle="inputClass"
                        placeholder="Digite o nome do produto..."
                    >
                    </Input>
                    <Input
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        label="Categoria do produto:"
                        labelClassStyle="inputLabelClassRegisterProduct"
                        inputClassStyle="inputClass"
                        placeholder="Digite a categoria do produto..."
                    >
                    </Input>
                    <Input
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        label="Descrição do produto:"
                        labelClassStyle="inputLabelClassRegisterProduct"
                        inputClassStyle="inputClass"
                        placeholder="Digite a descrição do produto..."
                    ></Input>
                </div>
                <div  className="divProductsRegisterRowWithImage">
                    <Input
                        value={productImage}
                        onChange={(e) => setProductImage(e.target.value)}
                        label="Imagem do produto:"
                        labelClassStyle="inputLabelClassRegisterProduct"
                        inputClassStyle="inputClass"
                        placeholder="Envie as imagens do produto ..."
                    ></Input>
                </div>
                
            </div>
            <div className="divProductsRegisterCollumn">
                <div className="divProductsRegisterRow">
                    <Input
                        value={manufacturingDate}
                        onChange={(e) => setManufacturingDate(e.target.value)}
                        label="Data de fabricação:"
                        labelClassStyle="inputLabelClassRegisterProduct"
                        inputClassStyle="inputClass"
                        placeholder="Digite a data de fabricação do produto..."
                    ></Input>
                    <Input
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        label="Preço do produto:"
                        labelClassStyle="inputLabelClassRegisterProduct"
                        inputClassStyle="inputClass"
                        placeholder="Digite o preço do produto..."
                    ></Input>
                </div>
                <div className="divProductsRegisterRow">
                    <Input
                        value={productTimeOfUse}
                        onChange={(e) => setProductTimeOfUse(e.target.value)}
                        label="Tempo de uso:"
                        labelClassStyle="inputLabelClassRegisterProduct"
                        inputClassStyle="inputClass"
                        placeholder="Digite o tempo de uso do produto..."
                    ></Input>
                    <Input
                        value={productBrand}
                        onChange={(e) => setProductBrand(e.target.value)}
                        label="Marca do produto:"
                        labelClassStyle="inputLabelClassRegisterProduct"
                        inputClassStyle="inputClass"
                        placeholder="Digite a marca do produto..."
                    ></Input>
                </div>
            </div>
            <Button onClick={handleRegisterProduct} btnClassStyle="buttonRegisterProduct">Cadastrar Produto</Button>
        </Base>
    )}