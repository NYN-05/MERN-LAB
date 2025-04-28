const { MongoClient } = require("mongodb");
const fs = require("fs");

const uri = "mongodb://localhost:27017"; // Change if your MongoDB URL is different
const dbName = "usermanaged";
const collectionName = "transactions";

async function loadData() {
    const client = new MongoCl
    ient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Drop collection if it exists
        await collection.drop().catch(err => console.log("Collection does not exist, skipping drop."));

        // Load transactions.json
        const transactionsData = JSON.parse(fs.readFileSync("transactions.json", "utf8"));
        await collection.insertMany(transactionsData);
        console.log("Inserted transactions.json data.");

        // Load transactions_upsert.json
        const upsertData = JSON.parse(fs.readFileSync("transactions_upsert.json", "utf8"));

        for (const record of upsertData) {
            await collection.updateOne(
                { _id: record._id },  // Match by _id (ensure it's included in your JSON)
                { $set: record },
                { upsert: true }
            );
        }

        console.log("Upserted transactions_upsert.json data.");
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
        console.log("MongoDB connection closed.");
    }
}

// Run the function
loadData();
