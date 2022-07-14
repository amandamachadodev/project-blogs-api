const Joi = require('joi');
const db = require('../database/models/user');

const usersService = {
  validateBody: (data) => {
    const schema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required().min(6),
    });

    const { error, value } = schema.validate(data);

    if (error) throw error;

    return value;
  },

  create: async ({ email, password }) => {
    const user = await db.User.create({ email, password });
    return user;
  },

};

module.exports = usersService;