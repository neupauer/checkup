const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://147.232.60.4:5901";

const dbName = "Brecko";

// Use connect method to connect to the server
MongoClient.connect(
  url,
  {
    useUnifiedTopology: true,
  },
  function (err, client) {
    assert.strictEqual(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    // insertDocuments(db, function() {
    //   client.close();
    // });

    // const findDocuments = function(db, callback) {
    //   // Get the documents collection

    // }

    // const collection = db.collection("test");
    // // Find some documents
    // collection.find({}).toArray(function (err, docs) {
    //   assert.strictEqual(err, null);
    //   console.log("Found the following records");
    //   console.log(docs);
    // });

    insertDocuments(db, console.log);
  }
);

const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection("checkup_reports");
  // Insert some documents
  collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};
