const fs = require('fs');
const path = require('path');
const http = require('http');

function createFoldersAndFiles() {
    for (let i = 1; i <= 10; i++) {
        const folderPath = path.join(__dirname, `folder${i}`);
        const classworkPath = path.join(folderPath, 'classwork');
        const homeworkPath = path.join(folderPath, 'homework');

        fs.mkdirSync(classworkPath, { recursive: true });
        fs.mkdirSync(homeworkPath, { recursive: true });

        fs.writeFileSync(path.join(classworkPath, 'classwork.js'), 'console.log("goa best");');
        fs.writeFileSync(path.join(homeworkPath, 'homework.js'), 'console.log("goa best");');

        logOperation(`Created folder${i} with subfolders and files`, 'Success');
    }
}

function deleteFoldersInRange(start, end) {
    for (let i = start; i <= end; i++) {
        const folderPath = path.join(__dirname, `folder${i}`);
        if (fs.existsSync(folderPath)) {
            fs.rmSync(folderPath, { recursive: true, force: true });
            logOperation(`Deleted ${folderPath}`, 'Success');
        } else {
            logOperation(`Folder ${folderPath} does not exist`, 'Error');
        }
    }
}

function logOperation(action, status) {
    const timestamp = new Date().toISOString();
    const logMessage = `${action} at ${timestamp} - ${status}\n`;
    fs.appendFileSync(path.join(__dirname, 'log.txt'), logMessage);
    console.log(logMessage.trim());
}

function searchTextInFiles(folderName, searchText) {
    const folderPath = path.join(__dirname, folderName);
    const result = { foundIn: [] };

    fs.readdirSync(folderPath).forEach(subFolder => {
        const subFolderPath = path.join(folderPath, subFolder);

        if (fs.statSync(subFolderPath).isDirectory()) {
            fs.readdirSync(subFolderPath).forEach(file => {
                const filePath = path.join(subFolderPath, file);
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                
                if (fileContent.includes(searchText)) {
                    result.foundIn.push(filePath);
                }
            });
        }
    });

    return result;
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Welcome to GOA!' }));
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

