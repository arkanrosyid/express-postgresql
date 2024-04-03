const router = require('express').Router();
const userController = require('../../controller/userController');
const authMiddleware = require('../../middleware/authMiddleware');
const loginController = require('../../controller/auth/loginController');
const registerController = require('../../controller/auth/registerController');


// get all
router.get('/getAll', 
authMiddleware.isLogin, 
authMiddleware.isAdmin,
userController.getAll);
// router.get('/getById/:id', userController.getById);
router.post('/create', userController.createUser);
router.post('/login', loginController.login);

router.get('/test', userController.test);   

module.exports = router;
// Path: src/routes/v1/index.js