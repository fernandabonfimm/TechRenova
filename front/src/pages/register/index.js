import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "components/input";
import Button from "components/button";
import Swal from "sweetalert2";
import { UserEndpoint } from "services/endpoints/user.endpoint";
import SelectComponent from "components/select";
import InputComponentPass from "components/inputpass";

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
  const [optionChoice, setOptionChoice] = React.useState(1);

  const onChangeSelect = (value) => {
    setOptionChoice(value.value);
  };

  function handleRegister() {
    const body = {
      name: name,
      surname: surname,
      email: email,
      password: hash,
      category: optionChoice,
    };
    if (body.password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "As senhas não coincidem!",
      });
      return;
    } else {
      UserEndpoint.Register(body)
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Registro criado!",
            text: "Registro criado com sucesso",
          }).then(() => {
            localStorage.setItem("user", JSON.stringify(response));
            navigate("/");
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
          });

          if (!error.response || error.response.status !== 302) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response,
            });
          }
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
          onChange={(value) => onChangeSelect(value)}
        />
        <InputComponentPass
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          label="Senha"
          placeholder="***********"
        ></InputComponentPass>
        <InputComponentPass
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          label="Confirmar senha"
          placeholder="***********"
        ></InputComponentPass>
        <Button onClick={handleRegister}>Criar Cadastro</Button>
        <span className="spanLogin">
          Já possui conta? <a onClick={() => navigate("/login")}>Fazer login</a>
        </span>
      </div>
      <div className="divLogin1"></div>
    </div>
  );
}
