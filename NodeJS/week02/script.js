'use strict';

require('dotenv').config();
const fs = require('fs');
const readline = require('readline');
const stream = fs.createReadStream(process.env.FILE_ADDRESS_CSV);
const rl = readline.createInterface({ input: stream });

let users = [];
let index = 0;

async function clearFile() {
    return fs.writeFile('./results.txt', '', 'utf8', (error) => {
        if (error) {
            console.error('Failed to clear the file:', error);
        } else {
            console.log('Results were cleared.');
        }
    });
}

function writeResultsToFile(filePath, data) {
    fs.appendFile(filePath, data + '\n', 'utf8', (error) => {
        if (error) {
            console.error('Failed to write to the file:', error);
        }
    });
}

clearFile()
    .then(() => {
        rl.on('line', (row) => {
            if (index === 0) {
                index++;
                return;
            }

            const rowData = row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g).map((field) =>
                // Remove leading/trailing whitespace and quotes from each field
                field.replace(/^\s*["']?|["']?\s*$/g, '')
            );
            //const rowData = row.split(',');

            users.push({
                id: rowData[0],
                firstName: rowData[1],
                lastName: rowData[2],
                age: rowData[3],
                email: rowData[4],
                city: rowData[5],
                country: rowData[6],
                profession: rowData[7],
                salary: Number(rowData[8]),
            });
        });

        rl.on('close', () => {
            console.log('Total salary:', getTotalSalary(users));
            console.log('Average salary :', averageSalary(users));
            console.log('Minimum salary :', minimumSalary(users));
            console.log('Maximum salary :', maximumSalary(users));
            console.log('Minimum age :', minimumAge(users));
            console.log('Minimum age :', maximumAge(users));

            const filePath = './results.txt';
            writeResultsToFile(filePath, 'Total salary: ' + getTotalSalary(users));
            writeResultsToFile(filePath, 'Average salary: ' + averageSalary(users));
            writeResultsToFile(filePath, 'Minimum salary: ' + minimumSalary(users));
            writeResultsToFile(filePath, 'Maximum salary: ' + maximumSalary(users));
            writeResultsToFile(filePath, 'Minimum age: ' + minimumAge(users));
            writeResultsToFile(filePath, 'Maximum age: ' + maximumAge(users));
        });
    })
    .catch((error) => {
        console.error('Failed to clear the file:', error);
    });

//1. The total salary
const getTotalSalary = (users) => {
    return users.reduce((acc, user) => {
        return acc + user.salary;
    }, 0);
};

//2. The average salary
const averageSalary = (users) => {
    return getTotalSalary(users) / users.length;
};

const getAllUserProfessions = (users) => {
    const professions = [];
    users.forEach((user) => {
        const userProfession = user.profession;
        if (!professions.includes(userProfession)) {
            professions.push(user.profession);
        }
    });
    return professions;
};

//3. Minimun salary with the corresponding proffesion
const minimumSalary = (users) => {
    const professions = getAllUserProfessions(users);
    const professionsIncludingMinSalary = [];

    professions.forEach((profession) => {
        let minSalary = undefined;
        users.forEach((user) => {
            if (user.profession === profession) {
                if (minSalary === undefined || user.salary < minSalary) {
                    minSalary = user.salary;
                }
            }
        });

        professionsIncludingMinSalary.push(`${profession} have the minimum salary ${minSalary}`);
        // profession: profession, minSalary: minSalary
    });

    return professionsIncludingMinSalary;
};

//4. Maximum salary with the corresponding profession
const maximumSalary = (users) => {
    const professions = getAllUserProfessions(users);
    const professionsIncludingMaxSalary = [];

    professions.forEach((profession) => {
        let maxSalary = undefined;
        users.forEach((user) => {
            if (user.profession === profession) {
                if (maxSalary === undefined || user.salary > maxSalary) {
                    maxSalary = user.salary;
                }
            }
        });

        professionsIncludingMaxSalary.push(`${profession} have the minimum salary ${maxSalary}`);
    });

    return professionsIncludingMaxSalary;
};

//5. Minimun age
const minimumAge = (users) => {
    let minimumAge = Math.min(...users.map((user) => user.age));
    return minimumAge;
};

//5. Maximum age
const maximumAge = (users) => {
    let maximumAge = Math.max(...users.map((user) => user.age));
    return maximumAge;
};
