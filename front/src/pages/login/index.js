import React from "react";
import Input from "../../components/input";
import Button from "components/button";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    let body = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(body);
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
        ></Input>
        <Input
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          label="Senha"
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
