const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin_password',
    database: 'new_world', // Specify the database you want to connect to
    multipleStatements: true, // Enable multiple statements to execute the dump
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id', connection.threadId);

    // Define the queries
    const queries = [
        {
            question: '1. What are the names of countries with population greater than 8 million?',
            query: 'SELECT Name FROM country WHERE Population > 8000000;',
        },
        {
            question: "2. What are the names of countries that have 'land' in their names?",
            query: "SELECT Name FROM country WHERE Name LIKE '%land%';",
        },
        {
            question: '3. What are the names of the cities with population in between 500,000 and 1 million?',
            query: 'SELECT Name FROM city WHERE Population BETWEEN 500000 AND 1000000;',
        },
        {
            question: "4. What's the name of all the countries on the continent ‘Europe’?",
            query: "SELECT Name FROM country WHERE Continent = 'Europe';",
        },
        {
            question: '5. List all the countries in the descending order of their surface areas.',
            query: 'SELECT Name FROM country ORDER BY SurfaceArea DESC;',
        },
        {
            question: '6. What are the names of all the cities in the Netherlands?',
            query: "SELECT city.Name FROM city JOIN country ON city.CountryCode = country.Code WHERE country.Name = 'Netherlands';",
        },
        {
            question:
                '7. List the names of the countries that has more than 10 cities, and a total population of the cities listed (not the country population) of more than 50 million',
            query: `
                SELECT 
                    country.Name 
                FROM 
                    country 
                JOIN 
                    city ON country.Code = city.CountryCode 
                GROUP BY 
                    country.Name 
                HAVING 
                    COUNT(city.ID) > 10 
                    AND SUM(city.Population) > 50000000;
            `,
        },
        {
            question: '8. List the cities from the countries found in #7, where the city population is > 5M',
            query: `
        SELECT 
          city.Name AS CityName, 
          city.Population, 
          country.Name AS CountryName 
        FROM 
          city 
        JOIN 
          country ON city.CountryCode = country.Code 
        WHERE 
          city.Population > 5000000 
          AND country.Name IN (
            SELECT 
              country.Name 
            FROM 
              country 
            JOIN 
              city ON country.Code = city.CountryCode 
            GROUP BY 
              country.Name 
            HAVING 
              COUNT(city.ID) > 10 
              AND SUM(city.Population) > 50000000
          );
      `,
        },
        {
            question: '9. List the largest country (by size) on each continent, except Antarctica',
            query: `
        SELECT 
          c1.Continent, 
          c1.Name AS CountryName, 
          c1.SurfaceArea 
        FROM 
          country c1 
        JOIN 
          (
            SELECT 
              Continent, 
              MAX(SurfaceArea) AS MaxSurfaceArea 
            FROM 
              country 
            WHERE 
              Continent != 'Antarctica' 
            GROUP BY 
              Continent
          ) c2 
        ON 
          c1.Continent = c2.Continent 
          AND c1.SurfaceArea = c2.MaxSurfaceArea;
      `,
        },
    ];

    // Function to run the queries
    function runQueries() {
        queries.forEach((queryObj, index) => {
            connection.query(queryObj.query, (err, results) => {
                if (err) {
                    console.error('Error executing query:', err.stack);
                    return;
                }
                console.log(queryObj.question);
                console.log(results);
                if (index === queries.length - 1) {
                    connection.end();
                }
            });
        });
    }

    // Run the queries
    runQueries();
});
