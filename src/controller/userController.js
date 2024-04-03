const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');
const crypto = require('crypto');


const userController = {
   test : async (req, res) => {
    key = crypto.randomBytes(64).toString('hex');
    res.send(key);
   },
  createUser : async (req, res, next) => {
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
      next(error);
    }
  },

  getAll : async (req, res) => {
    try {
      const users = await userModel.findAll();
      res.json(users);
    } catch (error) {
        next(error);
    }
  },
};

module.exports = userController;