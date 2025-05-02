// This script reads a JSON file containing Pokémon data and logs the 'hp' value to the console INCORRECTLY
// See if you can correctly display the 'hp' value from the JSON file.


const fs = require('fs'); // Import the 'fs' module to read files
const path = require('path'); // Import the 'path' module to handle file paths

// Path to the JSON file
const filePath = path.join(__dirname, 'resources', 'testPokemon.json');

// Read and parse the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        //console.log('JSON data:', jsonData); // Uncomment this line to see the entire JSON data
        if (jsonData.hp !== undefined) {
            console.log('hp value:', jsonData.hp);
        } else {
            console.log('hp value not found in the JSON file.');
        }
    } catch (parseErr) {
        console.error('Error parsing the JSON file:', parseErr);
    }
});