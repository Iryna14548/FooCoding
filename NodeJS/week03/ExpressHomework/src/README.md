1. # Todos API Application

his is simple Todos API that allows users to perform CRUD (Create, Read, Update, Delete) operations on todos stored in the file system.

2. # How to Run the Application

-   **Prerequisites**:Ensure that Node.js is installed on your system. The application has been developed and tested with Node.js version `v18.12.1`. You can download it from [Node.js official website](https://nodejs.org/).
-   **Clone the Repository**: Clone or download the application to your local machine.
-   **Install Dependencies**: Navigate to the project directory and run `npm install` to install all the necessary dependencies.
-   **Start the Application**: Run the script using Node.js with the command `npm start`. This will launch the application on `http://localhost:3000/` by default.

3. ## Todo Application API Documentation

## Overview

This document outlines the API endpoints available in the Todo Application, enabling operations for creating, retrieving, updating, and deleting todo items.

## Base URL

The base URL for accessing the API is: `http://127.0.0.1:3000`

## API Endpoints

### Get Todos

-   **Endpoint:** `/todos`
-   **Method:** `GET`
-   **Description:** Fetches a list of all the todo items.
-   **Response Body:**
    ```json
    {
      "todos": [
        {
          "id": "uuid",
          "task": "string",
          "isDone": boolean
        }
      ]
    }
    ```

### Add Todo

-   **Endpoint:** `/todos`
-   **Method:** `POST`
-   **Description:** Adds a new todo item.
-   **Request Body:**
    ```json
    {
      "task": "string",
      "isDone": boolean
    }
    ```
-   **Response Body:**
    ```json
    {
      "todo": {
        "id": "uuid",
        "task": "string",
        "isDone": boolean
      }
    }
    ```

### Update Todo

-   **Endpoint:** `/todos`
-   **Method:** `PATCH`
-   **Description:** Updates an existing todo item. Note that the endpoint URL should include the todo item's ID.
-   **Request Body:**
    ```json
    {
      "id": "uuid",
      "task": "string",
      "isDone": boolean
    }
    ```
-   **Response Body:**
    ```json
    {
        "message": "Todo updated successfully"
    }
    ```

### Delete Todo

-   **Endpoint:** `/todos/:id`
-   **Method:** `DELETE`
-   **Description:** Deletes a todo item by its ID.
-   **Response Body:**
    ```json
    {
        "message": "Todo deleted successfully"
    }
    ```

## Request & Response Format

-   All requests and responses are expected to be in JSON format.

## Status Codes

The API uses conventional HTTP response codes to indicate the success or failure of requests:

-   `200 OK`: The request has succeeded.
-   `201 Created`: The request has succeeded and a new resource has been created.
-   `400 Bad Request`: The server could not understand the request due to invalid syntax.
-   `404 Not Found`: The server can not find the requested resource.
-   `500 Internal Server Error`: The server has encountered a situation it doesn't know how to handle.

## Error Handling

In case of errors, the API responds with the appropriate HTTP status code and a JSON object containing the error message, e.g.:

```json
{
    "error": "Error message"
}
```

## Validation

The API performs validations on incoming requests. If a request fails validation, it will respond with a `400 Bad Request` status code and details about the validation errors.
