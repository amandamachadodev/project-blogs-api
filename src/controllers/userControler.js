const authService = require('../services/authService');
const userService = require('../services/userService');

const validateUser = async (req, res) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long' });
  }
  if (!email.includes('@') || !email.includes('.com')) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return res.status(400).json({
    message: '"password" length must be at least 6 characters long' });
  }
};

const usersController = {
  create: async (req, res) => {
    const { displayName, email, password, image } = req.body;
    
    await validateUser(req, res);

    const newUser = await userService.create({ displayName, email, password, image });

    if (newUser === false) return res.status(409).json({ message: 'User already registered' });

    const token = await authService.login(email, password);

    return res.status(201).json({ token });
  },
  list: async (_req, res) => {
    const users = await userService.list();
    res.status(200).json(users);
  },
  findId: async (req, res) => {
    const user = await userService.findId(req.params.id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    res.status(200).json(user);
  },
};

module.exports = usersController;