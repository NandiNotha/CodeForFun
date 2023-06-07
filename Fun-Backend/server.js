const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3033

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
//Route for Users
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

//Route for Poses
app.get('/poses', db.getPoses)
app.get('/poses/:id', db.getPosesById)
app.post('/poses', db.createPoses)
app.put('/poses/:id', db.updatePoses)
app.delete('/poses/:id', db.deletePoses)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
