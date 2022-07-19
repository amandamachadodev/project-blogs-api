const postService = require('../services/postService');

const postController = {
  list: async (_req, res) => {
    const posts = await postService.list();
    res.status(200).json(posts);
  },
  findId: async (req, res) => {
    const post = await postService.findId(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    res.status(200).json(post);
  },
};

module.exports = postController;