module.exports = function(app){
app.get('/cadastro', function (req, res){
    res.render("secao/cadastro_produtos.ejs");
})
}