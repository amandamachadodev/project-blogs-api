require('express-async-errors');
const { User } = require('../database/models');

const usersService = {
  create: async ({ displayName, email, password, image }) => {
    const user = await User.findOne({ 
      attributes: { exclude: ['id', 'displayName', 'password', 'image'] },
      where: { email }, 
    });

    if (!user) {
      await User.create({ displayName, email, password, image });
      return true;
    }

    return false;
  },
  list: async () => {
    const users = await User.findAll({
      attributes: ['id', 'displayName', 'email', 'image'],
    });
    return users;
  },
  findId: async (id) => {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
    return user;
  },
};

module.exports = usersService;