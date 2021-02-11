const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://psk65lava:Sammy6565%21@cluster0.n5qr4.mongodb.net/sgChurch?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect(err => {
	const collection = client.db("test").collection("devices");
	console.log(collection)
  // perform actions on the collection object
  client.close();
});
