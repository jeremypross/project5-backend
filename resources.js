const router = require('express').Router();

router.use('/users', require('./controllers/users'));

module.exports = router;
