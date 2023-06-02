const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users.controllers');

// GET user by ID
router.get('/:id', UserController.getById);

// POST create a new user
router.post('/', UserController.create);

// PUT update user by ID
router.put('/:id', UserController.update);

// DELETE user by ID
router.delete('/:id', UserController.delete);

module.exports = router;