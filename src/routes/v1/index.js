const router = require("express").Router();


router.get('/', (req, res) => {
    res.send('using api routes!');
});
router.use('/users', require('./userRoutes'));

module.exports = router;