'use strict';
const request = require('request');
const API = 'http://192.168.15.39:8074/datasnap/rest/Produto/Ler';
var path = require('path');
var fs = require('fs');
const imageToUri = require('image-to-uri');

let valor;
let id;
let content = [];

//função request post
function requisicao(id) {
    request.post(API, {
        body: {
            Valores: {
                ID: id
            }
        },
        json: true

    }, (error, res, body) => {
        if (error) {
            console.log(error);
            valor = "Verifique conexão";
        } else {
            valor = body;
        }
    });
}


//metodos que serão esportados para o front-end
exports.ler = (req, res) => {
    requisicao(req.params.id);
    console.log("Achou ler");
    content = valor.result[0].Retorno;
    res.status(200).json({
        content
    });
    
};
