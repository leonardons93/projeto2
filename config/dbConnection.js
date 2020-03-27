async function main() {
	const MongoClient = require('mongodb').MongoClient;
	const uri = "mongodb+srv://leonardo:wg199361LNS@cluster0-o6aox.gcp.mongodb.net/test?retryWrites=true&w=majority";;

	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

	try {
		// Connect to the MongoDB cluster
		await client.connect();

		// Make the appropriate DB calls
		await listDatabases(client);
		// inserir somente uma lista de itens
		await inserirSimples(client, json);

	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

main().catch(console.error);

async function listDatabases(client) {
	databasesList = await client.db().admin().listDatabases();

	console.log("Databases:");
	databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
async function inserirSimples(client, novoitem) {
	const result = await client.db("test").collection("devices").insertOne(novoitem);
	console.log(`New listing created with the following id: ${result.insertedId}`);
}