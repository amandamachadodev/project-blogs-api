const postService = require('../services/postService');

const postController = {
  list: async (_req, res) => {
    const posts = await postService.list();
    res.status(200).json(posts);
  },
};

module.exports = postController;