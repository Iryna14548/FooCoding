const fs = require('fs');
const readline = require('readline');

const stream = fs.createReadStream('./users-data.csv');
const rl = readline.createInterface({ input: stream });

let users = [];

let index = 0;

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

//3. Minimun salary with the corresponding proffesion

const minimumSalary = (users) => {
    console.log('proffesion', users[0].profession);
};
