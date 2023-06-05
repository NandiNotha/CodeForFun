const express = require('express');
const { Pool } = require('pg');

const app = express();

// Create a new pool instance
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CodeForFun',
  password: 'Letsdoit!',
  port: 5432,
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
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  User.getById(userId, pool)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error('Error fetching user:', err);
      res.status(500).json({ error: 'An error occurred while fetching user' });
    });
});

require('./routes/user.route')(app)
// ...

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
