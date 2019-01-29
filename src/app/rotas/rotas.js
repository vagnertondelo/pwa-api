'use strict';

const request = require('request');
//const API = 'https://api-top.herokuapp.com/flavio/photos';
const controller = require('../controller/rotas-controller');

module.exports = (app) => {

    app.post('/item', controller.lista) ;
    
    app.get('/', controller.get);

    app.put('/:id', controller.put);

    app.delete('/delete', controller.delete);




    // var valor;
    // request(API, function (error, response, body) {
    //     if (error) {
    //         valor = "Verifique conexão";

    //     } else {

    //         valor = JSON.parse(body);
    //     }

    // });


    //const getJSON = require('get-json');
    //const API = 'https://api-top.herokuapp.com/flavio/photos';

    
       
        // getJSON(API, function (error, response) {
        //     if (error) {
        //         console.log("deu erro: VERIFIQUE CONEXÃO " );
        //     }else {
        //         valor2 = JSON.stringify(response[2].description);
        //         console.log("ID: " + JSON.stringify(response[2].id));
        //     }
        // });
    

    
};

