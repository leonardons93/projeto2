module.exports = function (app) {
    app.get('/produto', function (req, res) {
        async function server() {

            const MongoClient = require('mongodb').MongoClient;
            const uri = "mongodb+srv://leonardo:wg199361LNS@cluster0-o6aox.gcp.mongodb.net/test?retryWrites=true&w=majority";;

            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

            try {

                await client.connect();


                const result = await listDatabases(client);

            } catch (e) {
                console.error(e);
            } finally {
                res.send(result)
                await client.close();
            }
        }
       // res.render("../views/produtos.ejs",{result});
    })
}
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
async function inserirSimples(client, novoitem) {
    const result = await client.db("test").collection("devices").insertOne(novoitem);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

const uri = "mongodb+srv://teste:chucky@cluster0-o6aox.gcp.mongodb.net/test?retryWrites=true&w=majority";
const urisuper = "mongodb+srv://leonardo:wg199361LNS@cluster0-o6aox.gcp.mongodb.net/test?retryWrites=true&w=majority";
