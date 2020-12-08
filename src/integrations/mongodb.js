const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

MongoClient.connect(
  "mongodb://147.232.60.4:5901",
  {
    useUnifiedTopology: true,
  },
  async function (err, client) {
    assert.strictEqual(null, err);
    const db = client.db("Brecko");
    try {
      await collback(db);
    } catch (error) {}
    client.close();
  }
);
