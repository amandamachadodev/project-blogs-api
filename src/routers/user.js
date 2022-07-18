const { Router } = require('express');
const usersController = require('../controllers/userControler');

const router = Router();

router.post('/', usersController.create);

module.exports = router;