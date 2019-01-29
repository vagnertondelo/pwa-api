'use strict';
const request = require('request');
const API = 'https://api-top.herokuapp.com/flavio/photos';
var path = require('path');
var fs = require('fs');
const image2base64 = require('image-to-base64');
var base64Img = require('base64-img');
//const image2base64 = require('base64-img');
let valor;
let content = [];
let valorDefnido = [];
let valorFinal = [];


request(API, function (error, response, body) {

    if (error) {
        valor = "Verifique conexão";
    } else {
        valor = JSON.parse(body);
        // valor = body;
    }
});

// let types, handle, entry, ext; 
// types = new Array ('png', 'jpg', 'jpeg', 'gif');
//     if (handle = opendir('imagens')) {
//         while (entry = readdir(handle)) {
//             ext = strtolower(pathinfo(entry, PATHINFO_EXTENSION));
//             if (in_array(ext, types)) console.log(entry) ;
//         }
//         closedir(handle);
//     }


exports.lista = (req, res) => {
    //busca img no diretorio
    var directoryPacth = path.join(__dirname, '../imagens');
    //lê diretorio
    var files = fs.readdirSync(directoryPacth);
    listaitem = files;
    function buscaitem() {
        //for (let i = 0; i < JSON.stringify(valor[2]).length; i++) {
        let busca = JSON.stringify(valor[2].id);
        //console.log("busca  " + JSON.stringify(valor[i].id));
        if (files != '') {
            for (let i = 0; i < files.length; i++) {
                // let arquivo = files[i];
                if (files[i] == busca + ".png") {
                    let content = directoryPacth + '/' + files[i];
                    valorDefnido = valor[2];
                    // console.log("caminho = " + content);
                    return content;


                }
            }
        } else {
            console.log("não tem imagem");
        }
        // }
    }
    //converte base 64
    image2base64(buscaitem())
        .then(
            (response) => {
                //resposta tela
                res.status(201).send(
                    {
                        imagem64: "data:image/png;base64," + response,
                        valorDefnido
                    }
                );
            }

        )
        .catch(
            (error) => {
                console.log("erro base 64: " + error); //Exepection error....
            }
        )

    console.log("final:  " + files);
    console.log("lista itens: " + listaitem);
};



exports.get = (req, res) => {
    //busca img no diretorio
    let directoryPacth = path.join(__dirname, '../imagens');
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
                    content[j] = "data:image/png;base64," + Buffer.from(directoryPacth + '/' + files[j]).toString('base64');//base64Img.base64(directoryPacth + '/' + files[i]);
                    // valorDefnido[j] = valor[n];
                    valorFinal[j] = { valorDefnido: valor[n], imagem: content[j] };

                }
            }
            n++;
        }
    }
    res.status(201).send(
        
            valorFinal

        



        //   valorFinal

    )


    //  }




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