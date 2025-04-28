const { MongoClient } = require('mongodb');
const readlineSync = require('readline-sync');

async function main() {
    // Connection URI
    const uri = "mongodb://localhost:27017"; // For local MongoDB
    const client = new MongoClient(uri);

    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected successfully to MongoDB server");

        // Specify the database and collection
        const database = client.db('school');
        const collection = database.collection('students');

        // Define student details to be inserted
        const student = {
            usn: '1AY22AI112',
            name: 'Vaishnavi Manjunath',
            sem: 4,
            year_of_admission: 2024
        };

        // Insert the student data
        const insertResult = await collection.insertOne(student);
        console.log(`New student inserted with ID: ${insertResult.insertedId}`);

        // Prompt user for partial name
        const partialName = readlineSync.question('Enter the partial name to search for: ');

        // Search for students using regex (case-insensitive)
        const query = { name: { $regex: partialName, $options: 'i' } };
        const students = await collection.find(query).toArray();

        // Print the search results
        if (students.length > 0) {
            console.log(`Students found matching "${partialName}":`);
            students.forEach(student => {
                console.log(`USN: ${student.usn}, Name: ${student.name}, Semester: ${student.sem}, Year of Admission: ${student.year_of_admission}`);
            });
        } else {
            console.log(`No students found with the name "${partialName}".`);
        }
        
    } catch (err) {
        console.error("Error:", err);
    } finally {
        // Ensure connection is closed
        await client.close();
        console.log("MongoDB connection closed.");
    }
}

// Run the main function
main().catch(console.error);
