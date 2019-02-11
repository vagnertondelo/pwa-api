const express = require('express');
const bodyParser = require('body-parser')
const app =  express();
//const router = express.Router();

//minhas rotas
const produto = require('../app/rotas/produto');
const index = require('../app/rotas/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(index);
app.use(produto);

//chamadas das rotas no app
//rotas(app);


//exporta modulo app
module.exports = app;