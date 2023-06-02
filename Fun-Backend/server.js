const express = require('express');
const { Pool } = require('pg');

const app = express();

// Create a new pool instance
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: '5433',
  port: 5433,
});

// Test the connection
pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Define your routes and other server configurations here
// ...

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
