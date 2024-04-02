const router = require('express').Router();
const userController = require('../../controller/userController');

// get all
router.get('/getAll', userController.getAll);
// router.get('/getById/:id', userController.getById);
router.post('/create', userController.createUser);

module.exports = router;
// Path: src/routes/v1/index.js