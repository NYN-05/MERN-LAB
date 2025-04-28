const { MongoClient } = require('mongodb');

async function main() {
    // Connection URI
    const uri = "mongodb://localhost:27017"; // For local MongoDB
    // const uri = "<Your MongoDB Atlas Connection String>"; // For MongoDB Atlas

    // Create a new MongoClient
    const client = new MongoClient(uri);

    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected successfully to server");

        // Specify the database and collection
        const database = client.db('school');
        const collection = database.collection('students');

        // Data to be inserted
        const student = {
            usn: '1AY22AI112',
            name: 'Vaishnavi Manjunath',
            sem: 4,
            year_of_admission: 2024
        };

        // Insert the student data
        const result = await collection.insertOne(student);
        console.log(`New student inserted with the following id: ${result.insertedId}`);
        
    } catch (err) {
        console.error(err);
    } finally {
        // Close the connection
        await client.close();
    }
}

main().catch(console.error);
