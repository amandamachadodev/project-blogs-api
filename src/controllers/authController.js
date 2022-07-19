const authService = require('../services/authService');

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email.includes('@') || !email.includes('.com')) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    if (
      password.length < 6
    ) return res.status(400).json({ message: 'Some required fields are missing' });
    
    const token = await authService.login(email, password);

    if (token === false) return res.status(400).json({ message: 'Invalid fields' });

    return res.status(200).json({ token });
  },
};

module.exports = authController; 