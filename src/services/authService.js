// const Joi = require('joi');
const db = require('../database/models');
const jwtService = require('./jwtService');

const authService = {
  login: async (email, password) => {
    const user = await db.User.findOne({ 
      attributes: { exclude: ['id', 'displayName', 'image', 'createdAt', 'updatedAt'] },
      where: { email }, 
    });

    if (!user || user.passwordHash !== password) {
      return false;
    }

    const { passwordHash, ...userWithoutPassword } = user.dataValues;

    const token = jwtService.createToken(userWithoutPassword);

    return token;
  },

  validateToken: (token) => {
    const data = jwtService.validateToken(token);

    return data;
  },
};

module.exports = authService; 