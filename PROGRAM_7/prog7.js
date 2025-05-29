const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/l7.html");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const validEmail = "test@example.com";
  const validPassword = "password123";

  if (email === validEmail && password === validPassword) {
    res.send("Login successful!");
  } else {
    res.send("Invalid email or password.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
