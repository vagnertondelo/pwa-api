'use strict';
const request = require('request');
const API = 'http://192.168.15.39:8074/datasnap/rest/Produto/Listar';
var path = require('path');
var fs = require('fs');
const imageToUri = require('image-to-uri');

//variaveis 
let valor;
let content = [];

//request post
request.post(API, {
    body: { Valores: {} },
    json: true

}, (error, res, body) => {
    if (error) {
        valor = "Verifique conexão";
    } else {
        valor = body;
    }
});


//metodos que serão esportados para o front-end
exports.listar = (req, res, next) => {
    console.log("achou post listar");
    content = valor.result[0].Retorno.Items;
    res.status(201).json(
        content
    )

}


exports.listaBebidas = (req, res) => {
    console.log("achou bebibdas")
    //busca img no diretorio
    let directoryPacth = path.join(__dirname, '../../imagens/categorias/bebidas');
    //lê diretorio
    var files = fs.readdirSync(directoryPacth);
    // function listaitem() {
    if (files != '') {
        console.log("1*entrou no if : " + JSON.stringify( valor.result));
        console.log("2*entrou no if : " + JSON.stringify( valor.result.Retorno.Items));
        let buscafor = JSON.stringify(valor[0].id);
        //console.log("buca for " +buscafor);
        let comparar;
        let n = 0;
        for (let i = 0; i < buscafor; i++) {
            comparar = JSON.stringify(valor[i].id);
            for (let j = 0; j < files.length; j++) {
                if (files[j] == comparar + ".png") {
                    console.log("file = " + files[j] + " / " + " comparar = " + comparar + ".png  -  id = " + valor[n].id);
                    console.log("compara = " + comparar);
                    content[j] = imageToUri(directoryPacth + '/' + files[j]);
                    valorFinal[j] = { valorDefnido: valor[n], imagem: content[j] };
                }
            }
            n++;
        } if (valorFinal == '') {
            valorFinal = "Nada encontrado";

        }
    }
    res.status(201).json(
        valorFinal

    )
};


exports.categorias = (req, res) => {
    console.log("achou categorias");
    //busca img no diretorio
    let directoryPacth = path.join(__dirname, '../imagens/categorias');
    //lê diretorio
    var files = fs.readdirSync(directoryPacth);
    // function listaitem() {
    if (files != '') {
        let buscafor = JSON.stringify(valor[0].id);
        let comparar;
        let n = 0;
        for (let i = 0; i < buscafor; i++) {
            comparar = JSON.stringify(valor[i].id);
            for (let j = 0; j < files.length; j++) {
                if (files[j] == comparar + ".png") {
                    console.log("file = " + files[j] + " / " + " comparar = " + comparar + ".png  -  id = " + valor[n].id);
                    console.log("compara = " + comparar);
                    content[j] = imageToUri(directoryPacth + '/' + files[j]);
                    valorFinal[j] = { valorDefnido: valor[n], imagem: content[j] };
                }
            }
            n++;
        }
    }
    res.status(201).send(

        valorFinal
    )
};



exports.delete = (req, res) => {
    res.status(201).send(req.body);
    console.log("delete");
};

exports.put = (req, res) => {
    const id = res.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};