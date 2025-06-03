const { MongoClient } = require("mongodb");
const fs = require("fs");
async function run() {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    await client.connect();
    const collection = client.db("usermanaged").collection("transactions");
    await collection.drop();
    const bulkData = JSON.parse(fs.readFileSync("transactions.json", "utf8"));
    await collection.insertMany(bulkData);
    console.log("Bulk data inserted.");
    const upsertData = JSON.parse(fs.readFileSync("transactions_upsert.json", "utf8"));
    for (let record of upsertData) {
      await collection.updateOne(
        { _id: record._id },
        { $set: record },
        { upsert: true }
      );
    }
    console.log("Data upserted successfully.");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
run();
