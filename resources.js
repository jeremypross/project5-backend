const router = require('express').Router();

router.use('/users', require('./controllers/users'));

router.use('/articles', require('./controllers/articles'));

router.use('/api', require('./controllers/api'));

module.exports = router;
