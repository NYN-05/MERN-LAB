const { MongoClient } = require('mongodb');
const readlineSync = require('readline-sync');

async function main() {
    // Connection URI
    const client = new MongoClient("mongodb://localhost:27017");

    try {
        await client.connect();
        console.log("Connected successfully to MongoDB server");
        const collection = client.db("school").collection('students');
       
        const partialName = readlineSync.question('Enter the partial name to search for: ');
        const query = { name: { $regex: partialName, $options: 'i' } };
        const students = await collection.find(query).toArray();

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
        await client.close();
        console.log("MongoDB connection closed.");
    }
}

main()
