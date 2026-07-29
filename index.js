require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use port from environment variable or default to 3000

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from the Express server!');
});

// New route for mcpserver
app.get('/mcpserver', (req, res) => {
  res.send('Welcome to the MCP Server endpoint!');
});

// New route for leetcode
app.get('/leetcode', (req, res) => {
  res.send('Here are your LeetCode challenges!');
});

// New route for mcp
app.get('/mcp', (req, res) => {
  res.send('MCP functionality endpoint.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
