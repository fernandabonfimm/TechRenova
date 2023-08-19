const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//Database connection
const conn = require("./database/connection");
conn.connect();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Servidor rodando em: ${port}`);
});

app.get("/", (res: { send: (arg0: string) => void }) => {
  res.send("Servidor rodando!");
});
