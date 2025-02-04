# Number Classification API

## Overview

The Number Classification API is a simple Express-based application that provides endpoints for classifying numbers. It allows users to send a number and receive detailed information about its properties, including whether it is prime, perfect, or an Armstrong number, along with a fun fact about the number.

## Features

- **Check if a number is even or odd**
- **Determine if a number is prime**
- **Check if a number is a perfect square**
- **Identify Armstrong numbers**
- **Fetch fun facts about numbers from an external API**

## How It Works

1. **Server Setup**: The application is built using Express and listens on a specified port (default is 5000). CORS middleware is enabled to allow cross-origin requests.

2. **Routes**:

   - **GET /api/numberClassification**: Returns a simple message indicating that the server is active.
   - **POST /api/numberClassification/:num**: Accepts a number as a parameter and returns a JSON response with the following information:
     - The original number
     - Whether the number is prime
     - Whether the number is a perfect square
     - The sum of the digits
     - Properties such as "even" or "odd"
     - A fun fact about the number retrieved from an external API

3. **Utilities**: The application includes utility functions for evaluating numbers, such as checking if a number is even, calculating the sum of its digits, and determining if it is prime or an Armstrong number.

## Installation

To run the application locally, clone the repository and install the dependencies:

```bash
npm install
```

## Usage

Start the server:

```bash
node server.js
```

You can then send requests to the API using tools like Postman or cURL.
Alternatively you can use this URL(https://number-classification-api-cy4a.onrender.com/api/numberClassification/<enter a number here>) to get responses from the API without running the server application on your local machine.
