import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "components/input";
import Button from "components/button";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");

  function handleRegister() {
    const body = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log(body);
  }

  return (
    <div className="divLoginFather">
      <div className="divLogin2">
        <h1 className="titleLogin">SEJA BEM-VINDO A TECH RENOVA!</h1>
        <span className="subtitleLogin">
          Preencha os campos a baixos para criar um novo cadastro na plataforma.
        </span>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Nome"
        ></Input>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Nome"
        ></Input>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Senha"
        ></Input>
        <Input
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          label="Senha"
        ></Input>
        <Button onClick={handleRegister}>Criar Cadastro</Button>
        <span className="spanLogin">
          Já possui conta?{" "}
          <a onClick={() => navigate("/login")}>Fazer login</a>
        </span>
      </div>
      <div className="divLogin1"></div>
    </div>
  );
}
