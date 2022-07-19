const { Router } = require('express');
const postController = require('../controllers/postController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth, postController.list);

module.exports = router;