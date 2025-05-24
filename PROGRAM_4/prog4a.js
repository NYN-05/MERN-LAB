const { MongoClient } = require('mongodb');
async function run() {
    const client = new MongoClient("mongodb://localhost:27017");
    try {
        await client.connect();
        const collection = client.db("school").collection('students'); 
        const student = {
            usn: '1AY22AI112',
            name: 'Vaishnavi Manjunath',
            sem: 4,
            year_of_admission: 2024
        };
        const result = await collection.insertOne(student);
        //console.log(`New student inserted with the following id: ${result.insertedId}`);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}
run() 