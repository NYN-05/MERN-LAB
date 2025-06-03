const { MongoClient } = require("mongodb");
async function run() {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    await client.connect();
    const transactions = client.db("usermanaged").collection("transactions");
    const customer = client.db("usermanaged").collection("customer");
    const recordSomu = await customer.findOne({ Name: "Somu" });
    console.log("Record with Name Somu:", recordSomu);
    const payment600 = await transactions.findOne({ "Payment.Total": 600 });
    console.log("Payment of 600:", payment600);
    const priceRange = await transactions.findOne({
      "Transaction.price": { $gte: 300, $lte: 500 },
    });
    console.log(
      "Price with transaction.price between 300 and 500:",
      priceRange
    );
    const totalTransactionAmount = await transactions
      .aggregate([{ $group: { _id: null, total: { $sum: "$Payment.Total" } } }])
      .toArray();
    console.log("Total transaction amount:", totalTransactionAmount);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
run();
