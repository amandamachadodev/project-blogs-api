const { Router } = require('express');
const postController = require('../controllers/postController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth, postController.list);
router.get('/:id', auth, postController.findId);
router.put('/:id', auth, postController.uptade);

module.exports = router;