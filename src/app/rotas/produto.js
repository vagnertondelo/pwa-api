'use strict';
//requisição para usar servidor
const express = require ('express');
//Utlizar as routas dentro do servidor
const router = express.Router();

//Controller que serão utilizados para os metodos
const controllerListar = require('../controller/produto/produto-listar-controller');
const controllerLer = require('../controller/produto/produto-ler-controller');

    //controller Listar Produto
    router.post('/bebidas', controllerListar.listaBebidas);
    router.get('/', controllerListar.categorias);
    router.put('/:id', controllerListar.put);
    router.delete('/delete', controllerListar.delete);
    router.post('/listar', controllerListar.listar);

    //controller Ler Produto
    router.post('/ler/:id', controllerLer.ler);

module.exports = router;

    



