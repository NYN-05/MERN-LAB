const express = require("express");
const path = require("path");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "lab.html")); // Fixed filename to match the HTML file
});

app.post("/submit-fruit", (req, res) => {
    console.log("Received fruit data:", req.body);
    res.status(200).send("Fruit received successfully"); // Improved response message
});

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}/`);
});