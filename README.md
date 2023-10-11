# api_tech_test
fibonacci_api for tech test
# Fibonacci Rest API

## Description

This is a basic Fibonacci Rest API implemented in JavaScript using Node.js and Express.

## Usage

Send a GET request to `/fibonacci` with the `n` parameter to get the Fibonacci value corresponding to the given index.

Example:
http://localhost:3000/fibonacci?n=6


Response:

```json
{
  "fibonacci_value": 8
}

Future Optimizations
Caching: Implement caching mechanisms to store previously calculated Fibonacci values for faster retrieval.
Error Handling: Add robust error handling for cases where the input is invalid or out of bounds.
Performance Improvements: Explore more efficient algorithms for calculating Fibonacci numbers.
Technical Decisions
Chose Node.js and Express for simplicity and ease of implementation.
Used a recursive approach for calculating Fibonacci values.


Running the API
1. Install the required dependencies:
npm install express

2. Start the API:

node src/index.js

The API will run on http://localhost:3000.




