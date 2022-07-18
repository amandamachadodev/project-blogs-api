const { Router } = require('express');
const usersController = require('../controllers/userControler');
const auth = require('../middlewares/auth');

const router = Router();

router.post('/', usersController.create);
router.get('/', auth, usersController.list);

module.exports = router;