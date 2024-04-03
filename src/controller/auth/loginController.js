const User = require('../../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_EXPIRATION_DURATION } = require('../../config');

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: {email: req.body.email} });
        if (!user) {
            throw { statusCode: 404, message: 'User not found' };
        }
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            throw { statusCode: 401, message: 'User not found' };
        }

        const token = jwt.sign({ id: user.id, role: user.role, name : user.name }, process.env.JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRATION_DURATION });
       
        res.cookie("loggedIn", true, { httpOnly: true });
        res.cookie("token", token, { httpOnly: true });
        res.status(200).send({ message: 'Logged in successfully', token })
             
    }
    catch (error) {
        next(error);
    }
};