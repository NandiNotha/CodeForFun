// const db = require('../config/db.config')
// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const port = 3000
// const users = require("../controllers/poses.controllers");
  
// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )

// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' })
// })

//   app.get('/poses', db.getPoses)
//   app.get('/poses/:id', db.getPosesById)
//   app.post('/poses', db.createPoses)
//   app.put('/poses/:id', db.updatePoses)
//   app.delete('/poses/:id', db.deletePoses)

//   app.listen(port, () => {
//     console.log(`App running on port ${port}.`)
//   })
