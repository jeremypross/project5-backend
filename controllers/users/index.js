const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index);

router.get('/dashboard', controller.authorizeToken);

router.post('/login', controller.login);

router.get('/:id', controller.show);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);

module.exports = router;
