const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3033
const cors = require("cors")

var corsOptions = {
  origin: "http://localhost:4200"
}

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(cors(corsOptions))

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
//Route for Users
app.get('/api/users', db.getUsers)
app.get('/api/users/:id', db.getUserById)
app.post('/api/users', db.createUser)
app.put('/api/users/:id', db.updateUser)
app.delete('/api/users/:id', db.deleteUser)

//Route for Poses
app.get('/api/poses', db.getPoses)
app.get('/api/poses/:id', db.getPosesById)
app.post('/api/poses', db.createPoses)
app.put('/api/poses/:id', db.updatePoses)
app.delete('/api/poses/:id', db.deletePoses)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
