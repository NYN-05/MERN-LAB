// Import the 'fs' module to perform file system operations
const fileSystem = require('fs');

// Create a file named 'example.txt' with initial content 'Hello, world!'
fileSystem.writeFile('example.txt', 'Hello, world!', (writeError) => {
    if (writeError) throw writeError; // Handle errors during file creation
    console.log('File successfully created.');

    // Read the content of the file 'example.txt'
    fileSystem.readFile('example.txt', 'utf8', (readError, fileContent) => {
        if (readError) throw readError; // Handle errors during file reading
        console.log('Initial file content:', fileContent);

        // Append additional content ' Vaishnavi M' to the file
        fileSystem.appendFile('example.txt', ' Vaishnavi M', (appendError) => {
            if (appendError) throw appendError; // Handle errors during file update
            console.log('File successfully updated.');

            // Read the updated content of the file
            fileSystem.readFile('example.txt', 'utf8', (updatedReadError, updatedFileContent) => {
                if (updatedReadError) throw updatedReadError; // Handle errors during file reading
                console.log('Updated file content:', updatedFileContent);

                // Delete the file 'example.txt'
                fileSystem.unlink('example.txt', (deleteError) => {
                    if (deleteError) throw deleteError; // Handle errors during file deletion
                    console.log('File successfully deleted.');
                });
            });
        });
    });
});
