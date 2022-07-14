const userService = require('../services/userService');

const usersController = {
  create: async (req, res) => {
    const { email, password } = userService.validateBody(req.body);

    const user = await userService.create({ email, password });

    res.status(201).json(user);
  },
};

module.exports = usersController;