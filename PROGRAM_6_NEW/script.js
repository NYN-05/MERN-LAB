const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.json());
let fruits = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'lab.html'));
});

app.post('/submit-fruit', (req, res) => {
    console.log('Received fruit data:', req.body);
    fruits.push(req.body);
    res.json(fruits);
});

app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
});