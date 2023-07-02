const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models/index')

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let empresas=models.Empresas;

app.post('/cadastro',async (req,res)=>{
    let reqs = await empresas.create({
        nomeEmpresa: req.body.nomeEmpresa,
        enderecoEmpresa: req.body.enderecoEmpresa,
        whatsappEmpresa: req.body.whatsappEmpresa,
        telefoneEmpresa: req.body.telefoneEmpresa
    });
    if (reqs){
        res.send(JSON.stringify('Empresa cadastrada com sucesso!'))
    }
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando!');
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