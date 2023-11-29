const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const models = require("./models/index");
const axios = require("axios");
const config = require("./config/config.json");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// let empresas = models.Empresas;

// app.post("/Empresa", async (req, res) => {
//   let reqs = await empresas.create({
//     nomeEmpresa: req.body.nomeEmpresa,
//     enderecoEmpresa: req.body.enderecoEmpresa,
//     whatsappEmpresa: req.body.whatsappEmpresa,
//     telefoneEmpresa: req.body.telefoneEmpresa,
//     imagensEmpresa: req.body.imagensEmpresa,
//   });
//   if (reqs) {
//     res.send(JSON.stringify("Empresa cadastrada com sucesso!"));
//   }
// });

app.post("/Empresa", async (req, res) => {
  //const url = config.urlApi + "Empresa";
  const url = config.urlWebApi + "Empresa";
  const dados = {
    nomeEmpresa: req.body.nomeEmpresa,
    enderecoEmpresa: req.body.enderecoEmpresa,
    whatsappEmpresa: req.body.whatsappEmpresa,
    telefoneEmpresa: req.body.telefoneEmpresa,
    imagensEmpresa: req.body.imagensEmpresa,
  };

  axios
    .post(url, dados)
    .then((response) => {
      res.send(
        JSON.stringify(
          `Empresa ${response.data.nomeEmpresa} cadastrada com sucesso!`
        )
      );
    })
    .catch((error) => {
      console.error("Erro na requisição para o backend:", error);
    });
});

let port = process.env.PORT || 1000;
app.listen(port, (req, res) => {
  console.log("Servidor Rodando!");
});

/*
app.get('/create',async (req,res)=>{
    let create=await empresas.create({ 
        nomeEmpresa: "", 
        enderecoEmpresa: "",
        whatsappEmpresa: "",
        telefoneEmpresa: "",
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Empresa cadastrada com sucesso!');
});
*/
