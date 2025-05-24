const express = require('express');
const app = express();
const port = 2500;
app.get('/', (req, res) => {
    const cookies = req.headers.cookie; // Correct way to access cookies
    if (cookies) {
        res.send(`Cookies found: ${cookies}`);
    } else {
        res.send('No Cookies found');
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
