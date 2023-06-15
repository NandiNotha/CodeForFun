const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CodeForFun',
  password: 'Letsdoit!',
  port: 5432,
})

// app.post('/register', (req, res) => {
//   const { firstName, lastName, email, password } = req.body;
//   // Insert the form data into the PostgreSQL database
//   pool.query(
//     'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)',
//     [firstName, lastName, email, password],
//     (error, results) => {
//       if (error) {
//         console.error('Error inserting data:', error);
//         res.status(500).json({ message: 'Error inserting data' });
//       } else {
//         console.log('Data inserted successfully');
//         res.status(200).json({ message: 'Data inserted successfully' });
//       }
//     }
//   );
// });

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { firstName, lastName, email, password } = request.body

  pool.query('INSERT INTO users (firstname, laststname, email, password) VALUES ($1, $2, $3, $4)', [firstName, lastName, email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { firstName, lastName, email, password } = request.body

  pool.query(
    'UPDATE users SET firstName = $1, lastName =$2 ,email = $3, password = $4 WHERE id = $5',
    [firstName, lastName, email, password, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}


//Creating a CRUD to modify and retrieve data from poses database

// Create and Save a new poses
const createPoses = (request, response) => {
  const { name, description, difficulty, image_url } = request.body

  pool.query('INSERT INTO poses (name, description, difficulty, image_url  VALUES ($1, $2, $3, $4) RETURNING *', [name, description, difficulty, image_url  ], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Poses added with ID: ${results.rows[0].id}`)
  })
}

// Retrieve all poses from the database.
const getPoses = (request, response) => {
  pool.query('SELECT * FROM poses ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// Find a single poses with an id
const getPosesById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM poses WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// Update a poses by the id in the request
const updatePoses = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, description, difficulty, image_url  } = request.body

  pool.query(
    'UPDATE poses SET name = $1, description = $2, difficulty = $3, image_url = $4 WHERE id = $5',
    [name, description, difficulty, image_url ],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`poses modified with ID: ${id}`)
    }
  )
}

// Delete a poses with the specified id in the request
const deletePoses = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM poses WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`pose deleted with ID: ${id}`)
  })
}

module.exports = {
// Exporting Users CRUD
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,

  //Exporting Poses CRUD
  getPoses,
  getPosesById,
  createPoses,
  updatePoses,
  deletePoses,
}