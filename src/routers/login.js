const { Router } = require('express');

const usersController = require('../controllers/user');
// const authController = require('../controllers/authController');

// const { validateEmail } = require('../middlewares/validateEmail');
// const { validatePassword } = require('../middlewares/validatePassword');

const router = Router();

router.post('/', usersController.create);

//  router.use(authController.validateToken);

module.exports = router; 