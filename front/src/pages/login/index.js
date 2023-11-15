import React from "react";
import Input from "../../components/input";
import Button from "components/button";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserEndpoint } from "services/endpoints/user.endpoint";

export default function Login() {
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    let body = {
      email: emailValue,
      password: passwordValue,
    };
   Swal.fire({
      title: "Aguarde...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    UserEndpoint.Login(body)
      .then((response) => {
        Swal.close();
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/home");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      });
  };
  return (
    <div className="divLoginFather">
      <div className="divLogin2">
        <h1 className="titleLogin">SEJA BEM-VINDO A TECH RENOVA!</h1>
        <span className="subtitleLogin">
          Preencha os campos a baixos para realizar login na plataforma.
        </span>
        <Input
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          label="E-mail"
          placeholder="Digite o seu e-mail..."
        ></Input>
        <Input
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          label="Senha"
          placeholder="************"
        ></Input>
        <Button onClick={handleLogin}>Fazer Login</Button>
        <span className="spanLogin">
          Ainda não possui conta?{" "}
          <a onClick={() => navigate("/register")}>Criar Conta</a>
        </span>
      </div>
      <div className="divLogin1">
      </div>
    </div>
  );
}
