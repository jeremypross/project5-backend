const router = require('express').Router();
const controller = require('./controller');

router.get('/:source', controller.getArticles);



module.exports = router;
