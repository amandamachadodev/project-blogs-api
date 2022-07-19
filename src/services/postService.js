require('express-async-errors');
const { BlogPost, Category, User } = require('../database/models');

const postService = {
  list: async () => {
    const posts = await BlogPost.findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' }],
    });
      
    return posts;
  },
  findId: async (id) => {
    const post = await BlogPost.findByPk(id, { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' }],
    });
    return post;
  },
  update: async (id, title, content) => {
    const [post] = await BlogPost.update({ title, content }, {
      where: { id } });
    return post;
  },
};

module.exports = postService;