const User = require('../../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: 'user'
        });

        const token = jwt.sign({ id: user.id, role: user.role, name : user.name }, 
        process.env.JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRATION_DURATION });
       
        res.cookie("loggedIn", true, { httpOnly: true });
        res.cookie("token", token, { httpOnly: true });
        res.status(200).send({ message: 'User created successfully', token })
             
    } catch (error) {
        next(error);
    }
};