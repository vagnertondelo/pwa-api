const express = require('express');
const bodyParser = require('body-parser')
const app =  express();

//minhas rotas
const rotas = require('../app/rotas/rotas');
const item = require('../app/rotas/item');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//chamadas das rotas no app
rotas(app);
item(app);

//exporta modulo app
module.exports = app;