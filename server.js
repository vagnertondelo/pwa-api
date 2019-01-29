
var http = require('http')
    ,app = require ('./src/config/custom-express');
    
http.createServer(app).listen(process.env.PORT || 2000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
