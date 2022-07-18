require('express-async-errors');
const { User } = require('../database/models');

const usersService = {

  create: async ({ displayName, email, password, image }) => {
    const user = await User.findOne({ 
      attributes: { exclude: ['id', 'displayName', 'password', 'image', 'createdAt', 'updatedAt'] },
      where: { email }, 
    });
    console.log(user);
    if (!user) {
      const newUser = await User.create({ displayName, email, password, image });
      console.log(newUser);
      return true;
    }

    return false;
  },

};

module.exports = usersService;