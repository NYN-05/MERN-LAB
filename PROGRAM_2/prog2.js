// Query MongoDB with Conditions: [Create appropriate collection with necessary documents to answer the
//     query]
//     a. Find any record where Name is Somu
//     b. Find any record where total payment amount (Payment.Total) is 600.
//     c. Find any record where price (Transaction.price) is between 300 to 500.
//     d. Calculate the total transaction amount by adding up Payment.Total in all records.

const { MongoClient } = require("mongodb");

async function run() {
    const url = "mongodb://localhost:27017";
    const client = new MongoClient(url);

    
    try {
        await client.connect();
        const db = client.db('usermanaged');
        const transactions = db.collection("transactions");
        const customer = db.collection("customer");

        // a. Find any record where Name is Somu
        const recordSomu = await customer.findOne({ Name: 'Somu' });
        console.log("Record with Name Somu:", recordSomu);

        // b. Find any record where total payment amount (Payment.Total) is 600
        const payment600 = await transactions.findOne({ 'Payment.Total': 600 });
        console.log("Payment of 600:", payment600);

        // c. Find any record where price (Transaction.price) is between 300 to 500
        const priceRange = await transactions.findOne({ 'Transaction.price': { $gte: 300, $lte: 500 } });
        console.log("Price with transaction.price between 300 and 500:", priceRange);

        // d. Calculate the total transaction amount by adding up Payment.Total in all records
        const totalTransactionAmount = await transactions.aggregate([
            { $group: { _id: null, total: { $sum: '$Payment.Total' } } }
        ]).toArray();

        console.log("Total transaction amount:", totalTransactionAmount[0]?.total || 0);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

run();