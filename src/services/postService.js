const { BlogPost, Category, User } = require('../database/models');

const postService = {
  list: async () => {
    const posts = await BlogPost.findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
      ],
    });
      
    return posts;
  },
};

module.exports = postService;