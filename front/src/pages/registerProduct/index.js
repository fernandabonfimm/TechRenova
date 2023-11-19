import React from "react";
import Base from "../../components/base";
import Input from "components/input";
import RegisterProductBanner from "../../assets/img/registerProductBanner.png";
import "../registerProduct/styles.css";
import Button from "components/button";
import { ProductEndpoint } from "services/endpoints/product.endpoint";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function RegisterProduct() {
  const navigate = useNavigate();
  const [productName, setProductName] = React.useState("");
  const [productDescription, setProductDescription] = React.useState("");
  const [productCategory, setProductCategory] = React.useState("");
  const [productTimeOfUse, setProductTimeOfUse] = React.useState("");
  const [productBrand, setProductBrand] = React.useState("");
  const [manufacturingDate, setManufacturingDate] = React.useState("");
  const [productPrice, setProductPrice] = React.useState();
  const [productImage, setProductImage] = React.useState("");

  async function handleRegisterProduct() {
    const body = {
      name: productName,
      image: productImage,
      description: productDescription,
      manufacturingDate: manufacturingDate,
      brand: productBrand,
      productUsageDuration: productTimeOfUse,
      price: productPrice,
      category: productCategory,
    };
    if (productPrice < 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "O preço do produto não pode ser negativo",
      });
      return;
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(productTimeOfUse)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "O tempo de uso do produto deve ser do tipo data, ex: 10/10/2020",
      });
      return;
    }
    if (
      productName === "" ||
      productDescription === "" ||
      productCategory === "" ||
      productTimeOfUse === "" ||
      productBrand === "" ||
      manufacturingDate === "" ||
      productPrice === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos os campos devem ser preenchidos",
      });
      return;
    }
    ProductEndpoint.RegisterProduct(body)
      .then((response) => {
        console.log("response registerproduct:", response, "body:", body);
        Swal.fire({
          icon: "success", // Corrigido de "sucess" para "success"
          title: "Produto criado",
          text: "Produto criado com sucesso",
        }).then(() => {
          console.log("NAVresponse registerproduct:", response);
          navigate("/");
        });
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
      <img
        src={RegisterProductBanner}
        alt="registerProduct"
        className="registerProduct"
      />
      <div className="divProductsRegisterCollumn">
        <div className="divProductsRegisterRow">
          <Input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            label="Nome do produto:"
            labelClassStyle="inputLabelClassRegisterProduct"
            inputClassStyle="inputClass"
            placeholder="Digite o nome do produto..."
          ></Input>
          <Input
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            label="Categoria do produto:"
            labelClassStyle="inputLabelClassRegisterProduct"
            inputClassStyle="inputClass"
            placeholder="Digite a categoria do produto..."
          ></Input>
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
  );
}
