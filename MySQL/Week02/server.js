const mysql = require('mysql2/promise');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function main() {
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'admin',
        password: 'admin_password',
        database: 'new_world',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    });

    async function getCapitalOfCountry(country) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(
                'SELECT city.name FROM city JOIN country ON city.id = country.capital WHERE country.name = ?',
                [country]
            );
            if (rows.length > 0) {
                console.log(`The capital of ${country} is ${rows[0].name}.`);
            } else {
                console.log(`No capital found for country ${country}.`);
            }
        } finally {
            connection.release();
        }
    }

    async function getLanguagesInRegion(region) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(
                'SELECT DISTINCT language FROM countrylanguage JOIN country ON countrylanguage.countrycode = country.code WHERE country.region = ?',
                [region]
            );
            if (rows.length > 0) {
                console.log(`Languages spoken in the region ${region}:`);
                rows.forEach((row) => console.log(row.language));
            } else {
                console.log(`No languages found for region ${region}.`);
            }
        } finally {
            connection.release();
        }
    }

    async function getCitiesCountForLanguage(language) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(
                'SELECT COUNT(DISTINCT city.name) AS count FROM city JOIN countrylanguage ON city.countrycode = countrylanguage.countrycode WHERE countrylanguage.language = ?',
                [language]
            );
            if (rows.length > 0) {
                console.log(`The number of cities where ${language} is spoken: ${rows[0].count}`);
            } else {
                console.log(`No cities found where ${language} is spoken.`);
            }
        } finally {
            connection.release();
        }
    }

    async function getCountriesWithSameLanguageAndContinent(country) {
        const connection = await pool.getConnection();
        try {
            const [continentRows] = await connection.execute(
                `
                SELECT DISTINCT c2.name FROM country c1
                JOIN country c2 ON c1.continent = c2.continent
                WHERE c1.name = ? AND c1.code != c2.code`,
                [country]
            );

            if (continentRows.length === 0) {
                console.log(`For the country given as input, is there any countries that`);
                console.log(`FALSE`);
                return; // Exit the function early as we do not need to check further
            }

            const [languageRows] = await connection.execute(
                `
                SELECT DISTINCT c2.name FROM country c1
                JOIN countrylanguage cl1 ON c1.code = cl1.countrycode
                JOIN countrylanguage cl2 ON cl1.language = cl2.language
                JOIN country c2 ON cl2.countrycode = c2.code
                WHERE c1.name = ? AND cl1.isOfficial = 'T' AND cl2.isOfficial = 'T' AND c1.code != c2.code`,
                [country]
            );

            const hasSameLanguage = languageRows.length > 0;
            const hasSameContinent = continentRows.length > 0;

            console.log(`For the country given as input, is there any countries that`);

            if (hasSameLanguage) {
                console.log(`Have the same official language? YES`);
                console.log(`Countries with the same official language as ${country}:`);
                languageRows.forEach((row) => console.log(row.name));
            } else {
                console.log(`Have the same official language? NO`);
            }

            if (hasSameContinent) {
                console.log(`Is in the same continent? YES`);
                console.log(`Countries in the same continent as ${country}:`);
                continentRows.forEach((row) => console.log(row.name));
            }

            if (hasSameLanguage && hasSameContinent) {
                console.log(
                    `Countries with the same official language and in the same continent as ${country}:`
                );
                languageRows.forEach((row) => console.log(row.name));
            }
        } finally {
            connection.release();
        }
    }

    rl.question('Enter the country to find its capital: ', async (country) => {
        await getCapitalOfCountry(country);

        rl.question('Enter the region to list all languages: ', async (region) => {
            await getLanguagesInRegion(region);

            rl.question(
                'Enter the language to find the number of cities it is spoken in: ',
                async (language) => {
                    await getCitiesCountForLanguage(language);

                    rl.question(
                        'Enter the country to find countries with same official language and continent: ',
                        async (country) => {
                            await getCountriesWithSameLanguageAndContinent(country);
                            rl.close();
                            await pool.end();
                        }
                    );
                }
            );
        });
    });
}

main().catch((err) => {
    console.error(err);
    rl.close();
    pool.end();
});
