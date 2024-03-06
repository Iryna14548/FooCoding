1. # FooCoding Express Homework

The objective of this homework assignment is to reinforce your understanding of building a RESTful API using Express, and practicing basic file system operations in Node.js. You will be creating a simple Todos API that allows users to perform CRUD (Create, Read, Update, Delete) operations on todos stored in the file system.

Requirements:

-   Use Express.js to create a RESTful API for managing Todos.
-   Implement CRUD operations (Create, Read, Update, Delete) for Todos.
-   Store the Todos data in the file system using Node.js file system module (fs).
-   Organize your code in a structured manner, separating concerns where appropriate (e.g., routes, controllers, models).

*   Ensure error handling for various scenarios, such as invalid requests, missing data, etc (extra points for implementing a validation middleware with some validation library like [TypeBox](https://www.npmjs.com/package/@sinclair/typebox), [Joi](https://www.npmjs.com/package/joi), or [Zod](https://www.npmjs.com/package/zod)).

-   Include appropriate comments to explain the functionality of each part of your code.
-   Implement basic validation to ensure that data passed to the API endpoints meets expected formats.
-   Add appropriate status codes and error messages in your API responses.

## Create a README.md file that includes:

-   Instructions on how to run the application.
-   API endpoints documentation (e.g., endpoint URLs, request methods, request and response formats).
-   Any additional notes or considerations for running or testing the application.
-   Test your API endpoints using a tool like Postman or curl to ensure they work as expected.

2. # FooCoding CLI Homework

The objective of this homework assignment is to practice consuming a RESTful API from the command line interface (CLI) using Node.js. You will be creating a CLI tool that interacts with the Todos API you built earlier, allowing users to perform CRUD (Create, Read, Update, Delete) operations on Todos directly from the command line.

## Requirements:

-   Create a command line interface (CLI) application using Node.js that interacts with the Todos REST API.
-   Implement the following commands in your CLI application:
    -   list: Lists all Todos from the API.
    -   add <todo>: Adds a new Todo to the API.
    -   update <id> <todo>: Updates the Todo with the specified <id> with the new <todo> text.
    -   delete <id>: Deletes the Todo with the specified <id>.
    -   end or Ctrl+C: Exits the CLI application.
-   Ensure proper error handling for cases such as invalid input, failed API requests, etc.
-   Make sure the CLI application runs continuously until the user explicitly exits by typing the end command or by pressing Ctrl+C.
-   Provide clear instructions within the CLI on how to use each command.
-   Handle asynchronous operations gracefully using async/await or Promises.
-   Implement basic input validation to prevent malformed input from being sent to the API.

## Optional Enhancements:

-   Implement interactive prompts for better user experience using libraries like inquirer or asking me to share code for this, because is something that we can implement by ourselves.
-   Add color-coded output or formatting to enhance readability of the CLI output.
-   Implement authentication for accessing the API if authentication is required.
-   Implement batch processing for handling multiple Todos at once.
-   Add support for additional features of the Todos API, such as pagination, sorting, and filtering.
