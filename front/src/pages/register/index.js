import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "components/input";
import Button from "components/button";
import Swal from "sweetalert2";
import { UserEndpoint } from "services/endpoints/user.endpoint";
import SelectComponent from "components/select";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [hash, setHash] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");
  const options = [
    { label: "Administrador", value: 1 },
    { label: "Vendedor", value: 2 },
    { label: "Cliente", value: 3 },
  ];
  const [optionChoice, setOptionChoice] = React.useState({});

  const onChangeSelect = (e) => {
    setOptionChoice(e);
  };
  function handleRegister() {
    const body = {
      name: name,
      surname: surname,
      email: email,
      password: hash,
      confirmPassword: confirmPassword,
      category: optionChoice,
    };
    if (body.password !== body.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "As senhas não coincidem!",
      });
      return;
    } else {
      UserEndpoint.Login(body)
        .then((response) => {
          Swal.close();
          localStorage.setItem("user", JSON.stringify(response));
          navigate("/login");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
          });
        });
    }
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
          placeholder="Digite seu primeiro nome..."
        ></Input>
        <Input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          label="Sobrenome"
          placeholder="Digite seu sobrenome..."
        ></Input>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="E-mail"
          placeholder="Digite seu e-mail..."
        ></Input>
        <SelectComponent
          label="Tipo de usuário"
          options={options}
          onChange={(e) => onChangeSelect(e.target.value)}
        />
        <Input
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          label="Senha"
          placeholder="***********"
        ></Input>
        <Input
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          label="Confirmar senha"
          placeholder="***********"
        ></Input>
        <Button onClick={handleRegister}>Criar Cadastro</Button>
        <span className="spanLogin">
          Já possui conta? <a onClick={() => navigate("/login")}>Fazer login</a>
        </span>
      </div>
      <div className="divLogin1"></div>
    </div>
  );
}
