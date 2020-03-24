module.exports = function (app) {
    app.get('/produto', function (req, res) {
        res.render("secao/produto.ejs");
    })
}
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://teste:chucky@cluster0-o6aox.gcp.mongodb.net/test?retryWrites=true&w=majority";
const urisuper = "mongodb+srv://leonardo:wg199361LNS@cluster0-o6aox.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});