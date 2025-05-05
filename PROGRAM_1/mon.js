// Using MongoDB, create a collection called transactions in database usermanaged (drop if it already exists)
// and bulk load the data from a json file, transactions.json. Upsert the record from the new file called transactions_upsert.json
// in Mongodb.

// const { MongoClient } = require("mongodb");
// const fs = require("fs");

// async function run() {
//   const uri = "mongodb://localhost:27017";
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     const db = client.db("usermanaged");
//     const collection = db.collection("transactions");

//     // Drop the collection if it exists
//     await collection
//       .drop()
//       .catch(() => console.log("Collection does not exist, proceeding..."));

//     // Read and insert the bulk data
//     const bulkData = JSON.parse(fs.readFileSync("transactions.json", "utf8"));
//     await collection.insertMany(bulkData);
//     console.log("Bulk data inserted.");

//     // Read and upsert the data
//     const upsertData = JSON.parse(fs.readFileSync("transactions_upsert.json", "utf8"));
//     for (let record of upsertData) {
//       await collection.updateOne(
//         { _id: record._id },
//         { $set: record },
//         { upsert: true }
//       );
//     }
//     console.log("Data upserted successfully.");
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// } 

// run().catch(console.dir);

const { MongoClient } = require("mongodb");
const fs = require("fs");
async function run() {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    await client.connect();
    const collection = client.db("usermanaged").collection("transactions");
    await collection.drop()//.catch(() => console.log("Collection does not exist."));
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
run()//catch(console.dir);
