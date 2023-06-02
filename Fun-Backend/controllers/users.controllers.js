const User = require('../models/user.model');

const UserController = {
  getById: (req, res) => {
    const userId = req.params.id;

    User.getById(userId)
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  },

  // Add other controller methods for CRUD operations on the Users table
};

module.exports = UserController;