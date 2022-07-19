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
  uptade: async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    if (
      title.length === 0 || content.length === 0
    ) return res.status(400).json({ message: 'Some required fields are missing' });
    
    const post = await postService.update(id, title, content);
    if (post === 0) return res.status(401).json({ message: 'Unauthorized user' });
    
    const posts = await postService.findId(req.params.id);
    return res.status(200).json(posts);
  },
};

module.exports = postController;