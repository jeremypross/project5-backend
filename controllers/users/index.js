const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index);

router.get('/dashboard', controller.authorizeToken);

router.post('/login', controller.login);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.get('/:id', controller.show);

module.exports = router;
