const { password } = require('pg/lib/defaults');
const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');


const userController = {
   
  createUser : async (req, res) => {
    hashedPassword = await bcrypt.hash(req.body.password, 10);
    try {
      const user = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.roles
      });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAll : async (req, res) => {
    try {
      const users = await userModel.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;