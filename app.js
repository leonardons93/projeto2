var app = require('./config/server.js')
var rotahome = require('./app/rotas/home.js')
var rotaprodutos = require('./app/rotas/produtos.js')
rotahome(app);
rotaprodutos(app);
app.listen(3000, function(){
    console.log("servidor top")
} ) 