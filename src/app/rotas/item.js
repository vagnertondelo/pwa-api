const request = require('request');
const API2 = 'https://api-top.herokuapp.com/flavio/photos';

module.exports = (app) => {
    
    var valor;
    
    request(API2, function (error, response, body) {
       
        if (error) {
            valor = "Verifique conexão";
        } else {
            valor = JSON.parse(body);
        }
    });

    
    app.get('/item', function (req, resp) {
        resp.send(valor);
    });

};

