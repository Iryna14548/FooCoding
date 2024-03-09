const fs = require('fs/promises');

//Loading data based on file path
async function loadDataFromFile(filePath, defaultValue) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            // File doesn't exist, return default value (usually an empty array)
            return defaultValue;
        } else {
            throw error; // Rethrow error if it's not a 'file not found' error
        }
    }
}

//Saving data to file. If file doesn't exist then it will create a new file based on the file path.
async function saveDataToFile(filePath, data) {
    await fs.writeFile(filePath, JSON.stringify(data, null, 4), 'utf8');
}

module.exports = { loadDataFromFile, saveDataToFile };
