const fs = require('fs');

// Create a file
fs.writeFile('example.txt', 'Hello', (err) => {
    if (err) throw err;
    console.log('File created.');

    // Read the filen
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);

        // Update the file
        fs.appendFile('example.txt', ' MERN', (err) => {
            if (err) throw err;
            console.log('File updated.');
            fs.readFile('example.txt', 'utf8', (err, data) => {
                if (err) throw err;
                console.log('File content:', data);

            // Delete the file
            fs.unlink('example.txt', (err) => {
                if (err) throw err;
                console.log('File deleted.');
            });
        });
    });
});
});
