const express = require('express');
const users = require('../controllers/users.controllers');

module.exports = app => {

    var router = require("express").Router();
  
    //Create a new Tutorial
    router.post("/", users.create);
    // app.post('/users/all', function(req, res){
    //     users.create
    //   });
  
    //Retrieve all Tutorials
    router.get("/", users.findAll);

    // GET user by ID
    // router.get('/:id', users.getById);
  
    //Retrieve a single Tutorial with id
    router.get("/:id", users.findOne);
  
    //Update a Tutorial with id
    router.put("/:id",users.update);
  
    // //Delete a Tutorial with id
    router.delete("/:id", users.delete);
  
    //Patch a Tutorial with id
    router.patch("/:id", users.update);
  
    //Delete all Tutorials
    router.delete("/", users.deleteAll);
  
    //Retrieve all published Tutorials
    router.get("/published", users.findAllPublished);
  
    app.use("/api/users", router);
  
  
  };