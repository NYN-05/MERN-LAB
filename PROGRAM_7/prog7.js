const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/l7.html');
});

// Handle POST request for login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Sample credentials for validation
    const validEmail = 'test@example.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
        res.send('Login successful!');
    } else {
        res.send('Invalid email or password.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
