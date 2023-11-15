
import React from "react";
import Base from "../../components/base";
import Input from "components/input";
import RegisterProductBanner from "../../assets/img/registerProductBanner.png";
import "../registerProduct/styles.css";
import Button from "components/button";
import { ProductEndpoint } from "services/endpoints/product.endpoint";

export default function RegisterProduct() {
    const [productName, setProductName] = React.useState("");
    const [productDescription, setProductDescription] = React.useState(""); 
    const [productCategory, setProductCategory] = React.useState("");
    const [productTimeOfUse, setProductTimeOfUse] = React.useState("");
    const [productBrand, setProductBrand] = React.useState("");
    const [manufacturingDate, setManufacturingDate] = React.useState("");
    const [productPrice, setProductPrice] = React.useState("");
    const [productImage, setProductImage] = React.useState("fcgfdgxdfgzdg");

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
        ProductEndpoint.RegisterProduct(body)
        .then((response) => {
            Swal.fire({
                icon: "sucess",
                title: "Produto criado",
                text: "Producto criado com sucesso",
            }).then(() => {
                console.log(response)
                navigate("/");
              })
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
          });
        });
    }


    return (
        <Base>
            <img src={RegisterProductBanner} alt="registerProduct" className="registerProduct" />
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
            <div className="btndiv-prod">
                <Button onClick={handleRegisterProduct}>Cadastrar Produto</Button>
            </div>
        </Base>
    )}